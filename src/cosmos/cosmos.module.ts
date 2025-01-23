import { Module } from '@nestjs/common';
import { CosmosService } from './cosmos.service';
import { CosmosController } from './cosmos.controller';

@Module({
  controllers: [CosmosController],
  providers: [CosmosService],
})
export class CosmosModule {}
