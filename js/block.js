class Block {
  constructor(index, timestamp, data, caseno, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.caseno = caseno;

    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return sha256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;

      this.hash = this.calculateHash();
    }
  }
}

class Blockchain {
  constructor() {
    let previousChainData = window.localStorage.getItem("chain");

    if (previousChainData === null) this.chain = [this.createGenesisBlock()];
    else this.chain = JSON.parse(previousChainData).chain;

    this.difficulty = 1;
  }

  createGenesisBlock() {
    return new Block(0, Date.now(), "Genesis", "0", 0);
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(hash, caseNo) {
    let newBlock = new Block(this.chain.length, Date.now(), hash, caseNo);
    this.difficulty++;
    newBlock.previousHash = this.getLatestBlock().hash;

    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) return false;
      else if (currentBlock.previousHash != previousBlock.hash) return false;
      else return true;
    }
  }

  findHash(caseNo) {
    function validate(chain) {
      return chain.caseno == caseNo;
    }
    let block = this.chain.find(validate);

    if (block != null) return block.data;
    else return null;
  }
}

