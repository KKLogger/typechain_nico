import * as CryptoJS from "crypto-js";
class Block {
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (block: Block): boolean =>
    typeof block.index === "number" &&
    typeof block.hash === "string" &&
    typeof block.data === "string" &&
    typeof block.timestamp === "number" &&
    typeof block.previousHash === "string";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getTimestamp = (): number => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getTimestamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    data,
    newTimestamp
  );
  const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
  addBlock(newBlock);
  return newBlock;
};
const compareHash = (block: Block): boolean =>
  Block.calculateBlockHash(block.index, block.previousHash, block.data, block.timestamp) ===
  block.hash;
const isBlockValid = (cur: Block, pre: Block): boolean => {
  if (!Block.validateStructure(cur)) {
    return false;
  } else if (cur.index !== pre.index + 1) {
    return false;
  } else if (cur.previousHash !== pre.hash) {
    return false;
  } else if (!compareHash(cur)) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (block: Block): void => {
  if (isBlockValid(block, getLatestBlock())) {
    blockchain.push(block);
  }
};
const genesisBlock: Block = new Block(0, "20202020", "", "first", 1234);
let blockchain: Block[] = [genesisBlock];

createNewBlock("second");
createNewBlock("third");
createNewBlock("fourth");

console.log(blockchain);
