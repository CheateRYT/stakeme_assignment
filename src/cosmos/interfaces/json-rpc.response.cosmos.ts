// interfaces/cosmos-block.interface.ts
export interface CosmosBlock {
  height: number;
  time: string;
  hash: string;
  proposedAddress: string;
}

export interface CosmosTransaction {
  hash: string;
  height: number;
  time: string;
  gasUsed: string;
  gasWanted: string;
  fee: string;
  sender: string;
}
