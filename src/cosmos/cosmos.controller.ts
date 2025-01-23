import { Controller } from '@nestjs/common';
import { CosmosService } from './cosmos.service';

@Controller('cosmos')
export class CosmosController {
  constructor(private readonly cosmosService: CosmosService) {}
}
