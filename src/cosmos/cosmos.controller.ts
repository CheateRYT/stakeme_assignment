import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CosmosService } from './cosmos.service';
import {
  CosmosBlock,
  CosmosTransaction,
} from './interfaces/json-rpc.response.cosmos';

@Controller('cosmos')
export class CosmosController {
  constructor(private readonly cosmosService: CosmosService) {}

  @Get('block/:height')
  async getBlock(
    @Param('height', ParseIntPipe) height: number,
  ): Promise<CosmosBlock> {
    return this.cosmosService.getBlock(height);
  }

  @Get('transactions/:hash')
  async getTransaction(
    @Param('hash') hash: string,
  ): Promise<CosmosTransaction> {
    return this.cosmosService.getTransaction(hash);
  }
}
