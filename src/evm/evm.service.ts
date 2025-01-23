import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import {
  EthBlock,
  EthTransaction,
  JsonRpcResponse,
} from './interfaces/json-rpc.response.evm';

@Injectable()
export class EvmService {
  private readonly ethRpcUrl = 'https://ethereum-rpc.publicnode.com';
  constructor(private readonly httpService: HttpService) {}

  async getBlock(height: number): Promise<{
    height: number;
    hash: string;
    parentHash: string;
    gasLimit: string;
    gasUsed: string;
    size: string;
  }> {
    const data = {
      jsonrpc: '2.0',
      method: 'eth_getBlockByNumber',
      params: [this.toHex(height), false],
      id: 0,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post<JsonRpcResponse<EthBlock>>(this.ethRpcUrl, data),
      );
      const block = response.data.result;

      if (!block) {
        throw new Error(`Block with height ${height} not found`);
      }

      return {
        height: parseInt(block.number, 16),
        hash: block.hash,
        parentHash: block.parentHash,
        gasLimit: block.gasLimit,
        gasUsed: block.gasUsed,
        size: block.size,
      };
    } catch (error) {
      console.error('Error fetching block:', error);
      throw new Error(
        `Failed to fetch block with height ${height}: ${error.message}`,
      );
    }
  }
  async getTransaction(hash: string): Promise<{
    hash: string;
    to: string;
    from: string;
    value: string;
    input: string;
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
    gasPrice: string;
  }> {
    const data = {
      jsonrpc: '2.0',
      method: 'eth_getTransactionByHash',
      params: [hash],
      id: 1,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post<JsonRpcResponse<EthTransaction>>(
          this.ethRpcUrl,
          data,
        ),
      );

      const transaction = response.data.result;
      if (!transaction) {
        throw new Error(`Transaction with hash ${hash} not found`);
      }

      return {
        hash: transaction.hash,
        to: transaction.to,
        from: transaction.from,
        value: transaction.value,
        input: transaction.input,
        maxFeePerGas: transaction.maxFeePerGas,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
        gasPrice: transaction.gasPrice,
      };
    } catch (error) {
      console.error('Error fetching transaction:', error);
      throw new Error(`Failed to fetch transaction: ${error.message}`);
    }
  }
  private toHex(value: number): string {
    return '0x' + value.toString(16);
  }
}
