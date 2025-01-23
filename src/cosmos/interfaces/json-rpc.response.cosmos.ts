import { ApiProperty } from '@nestjs/swagger';

export class CosmosBlock {
  @ApiProperty()
  height: number;

  @ApiProperty()
  time: string;

  @ApiProperty()
  hash: string;

  @ApiProperty()
  proposedAddress: string;
}

export class CosmosTransaction {
  @ApiProperty()
  hash: string;

  @ApiProperty()
  height: number;

  @ApiProperty()
  time: string;

  @ApiProperty()
  gasUsed: string;

  @ApiProperty()
  gasWanted: string;

  @ApiProperty()
  fee: string;

  @ApiProperty()
  sender: string;
}
