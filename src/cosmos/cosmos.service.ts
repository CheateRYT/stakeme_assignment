import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import {
  CosmosBlock,
  CosmosTransaction,
} from './interfaces/json-rpc.response.cosmos';

@Injectable()
export class CosmosService {
  private readonly cosmosRpcUrl =
    'https://cosmos-rest.publicnode.com/cosmos/tx/v1beta1/txs';

  constructor(private readonly httpService: HttpService) {}

  async getBlock(height: number): Promise<CosmosBlock> {
    const url = `${this.cosmosRpcUrl}/block/${height}`;

    try {
      const response = await firstValueFrom(this.httpService.get(url));
      const data = response.data;
      return {
        height: data.block.header.height,
        time: data.block.header.time,
        hash: data.block_id.hash,
        proposedAddress: data.block.header.proposer_address,
      };
    } catch (error) {
      console.error('Error fetching Cosmos block:', error);
      throw new Error(
        `Failed to fetch block with height ${height}: ${error.message}`,
      );
    }
  }

//Нужно передавать именно hex string транзакции
  async getTransaction(hash: string): Promise<CosmosTransaction> {
    const url = `${this.cosmosRpcUrl}/${hash}`;

    try {
      const response = await firstValueFrom(this.httpService.get(url));
      const data = response.data;
      return {
        hash: data.tx_response.txhash,
        height: data.tx_response.height,
        gasWanted: data.tx_response.gas_wanted,
        gasUsed: data.tx_response.gas_used,
        sender: data.tx.body.messages[0].from_address,
        fee: data.tx.auth_info.fee,
        time: data.tx_response.timestamp,
      };
    } catch (error) {
      console.error('Error fetching Cosmos transaction:', error);
      throw new Error(
        `Failed to fetch transaction with hash ${hash}: ${error.message}`,
      );
    }
  }
}
