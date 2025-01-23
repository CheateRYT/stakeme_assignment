import { Module } from '@nestjs/common';
import { EvmModule } from './evm/evm.module';
import { CosmosModule } from './cosmos/cosmos.module';

@Module({
  imports: [EvmModule, CosmosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
