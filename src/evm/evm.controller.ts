import { Controller } from '@nestjs/common';
import { EvmService } from './evm.service';

@Controller('evm')
export class EvmController {
  constructor(private readonly evmService: EvmService) {}
}
