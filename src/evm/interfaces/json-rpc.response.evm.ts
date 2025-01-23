export interface EthBlock {
  number: string;
  hash: string;
  parentHash: string;
  gasLimit: string;
  gasUsed: string;
  size: string;
}

export interface EthTransaction {
  hash: string;
  to: string;
  from: string;
  value: string;
  input: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  gasPrice: string;
}

export interface JsonRpcResponse<T> {
  jsonrpc: string;
  id: number;
  result: T;
}
