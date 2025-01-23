import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EvmService } from './evm.service';

@Controller('evm')
export class EvmController {
  constructor(private readonly evmService: EvmService) {}

  @Get('block/:height')
  async getBlock(@Param('height', ParseIntPipe) height: number) {
    return this.evmService.getBlock(height);
  }

  @Get('transactions/:hash')
  async getTransaction(@Param('hash') hash: string) {
    return this.evmService.getTransaction(hash);
  }
}
