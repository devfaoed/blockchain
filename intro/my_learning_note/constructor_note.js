// learnigng the use of constructor
// excersise
// creating a constructer ledger for 5 user transacting 5 bitcoin between each other
// faith have 5 bitcoin and he send 3 bitcoin to tunde, tunde send 2 bitcoin to felix, felix send 1 bitcoin to manager, and faith send a bitcoin to tade
// add an email domain "@forwardscchool.com.ng" prototype to each transaction 
// add a prototype to get each sender email address using the sender property
// solution

function Transaction(sender, amount, reciever, date){
    this.sender = sender,
    this.amount =  amount,
    this.reciever = reciever,
    this.date = date
}

const transaction1 = new Transaction("faith", "3 BTC", "tunde", Date.now());



const transaction2 = new Transaction("tunde", "2 BTC", "felix", Date.now());
console.log(transaction2)

const transaction3 = new Transaction("felix", "1 BTC", "manager", Date.now());
console.log(transaction3)

const transaction4 = new Transaction("faith", "1 BTC", "tade", Date.now())
console.log(transaction4)


// adding prototype to each transaction
Transaction.prototype.isEmailDomain = "@forwardscchool.com.ng"

console.log(transaction1.isEmailDomain);
console.log(transaction2.isEmailDomain);
console.log(transaction3.isEmailDomain);
console.log(transaction4.isEmailDomain);

// assigning email address with each user name using protype

Transaction.prototype.getEmailAddress = function(){
    return this.sender + this.isEmailDomain;
}

console.log(transaction1.getEmailAddress());
console.log(transaction2.getEmailAddress());
console.log(transaction3.getEmailAddress());
console.log(transaction4.getEmailAddress());
