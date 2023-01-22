function  Blockchain() {
    this.chain = [],
    this.newTransaction = []
}

// adding block prototype to blochain constructor
Blockchain.prototype.createNewBlock  = function(nonce, prevBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transaction: this.newTransaction,
        nonce: nonce,
        prevBlockHash: prevBlockHash,
        hash: hash
    }
    this.newTransaction = [],
    this.chain.push(newBlock)
    return newBlock
}

module.exports = Blockchain