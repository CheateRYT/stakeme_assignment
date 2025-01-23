import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CosmosModule } from './cosmos/cosmos.module';
import { EvmModule } from './evm/evm.module';

@Module({
  imports: [HttpModule, EvmModule, CosmosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
