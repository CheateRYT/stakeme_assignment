import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EvmController } from './evm.controller';
import { EvmService } from './evm.service';
@Module({
  imports: [HttpModule],
  controllers: [EvmController],
  providers: [EvmService],
})
export class EvmModule {}
