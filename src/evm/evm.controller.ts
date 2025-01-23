import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { EvmService } from './evm.service';
import { EthBlock, EthTransaction } from './interfaces/json-rpc.response.evm';

@Controller('evm')
export class EvmController {
  constructor(private readonly evmService: EvmService) {}

  @Get('block/:height')
  @ApiResponse({
    status: 200,
    description: 'Get info about block by height number',
    type: EthBlock,
  })
  async getBlock(
    @Param('height', ParseIntPipe) height: number,
  ): Promise<EthBlock> {
    return this.evmService.getBlock(height);
  }

  @Get('transactions/:hash')
  @ApiResponse({
    status: 200,
    description: 'Get info about transaction by hash',
    type: EthTransaction,
  })
  async getTransaction(@Param('hash') hash: string): Promise<EthTransaction> {
    return this.evmService.getTransaction(hash);
  }
}
