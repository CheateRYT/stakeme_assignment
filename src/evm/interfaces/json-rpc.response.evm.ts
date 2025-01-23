import { ApiProperty } from '@nestjs/swagger';

export class EthBlock {
  @ApiProperty()
  number?: string;

  @ApiProperty()
  hash: string;

  @ApiProperty()
  parentHash: string;

  @ApiProperty()
  gasLimit: string;

  @ApiProperty()
  gasUsed: string;

  @ApiProperty()
  size: string;
}

export class EthTransaction {
  @ApiProperty()
  hash: string;

  @ApiProperty()
  to: string;

  @ApiProperty()
  from: string;

  @ApiProperty()
  value: string;

  @ApiProperty()
  input: string;

  @ApiProperty()
  maxFeePerGas: string;

  @ApiProperty()
  maxPriorityFeePerGas: string;

  @ApiProperty()
  gasPrice: string;
}

export interface JsonRpcResponse<T> {
  jsonrpc: string;
  id: number;
  result: T;
}
