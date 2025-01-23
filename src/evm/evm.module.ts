import { Module } from '@nestjs/common';
import { EvmService } from './evm.service';
import { EvmController } from './evm.controller';

@Module({
  controllers: [EvmController],
  providers: [EvmService],
})
export class EvmModule {}
