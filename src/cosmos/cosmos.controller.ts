import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CosmosService } from './cosmos.service';
import {
  CosmosBlock,
  CosmosTransaction,
} from './interfaces/json-rpc.response.cosmos';

@Controller('cosmos')
export class CosmosController {
  constructor(private readonly cosmosService: CosmosService) {}

  @Get('block/:height')
  @ApiResponse({
    status: 200,
    description: 'Get info about block by height number, template - 24096310 ',
    type: CosmosBlock,
  })
  async getBlock(
    @Param('height', ParseIntPipe) height: number,
  ): Promise<CosmosBlock> {
    return this.cosmosService.getBlock(height);
  }

  @Get('transactions/:hash')
  @ApiResponse({
    status: 200,
    description:
      'Get info about transactions by Hex hash, template - 653AD7B9B3877272C45EAA48D20D999DCDBEABC5AD5F8DEA09CBADE2F4212198',
    type: CosmosTransaction,
  })
  async getTransaction(
    @Param('hash') hash: string,
  ): Promise<CosmosTransaction> {
    return this.cosmosService.getTransaction(hash);
  }
}
