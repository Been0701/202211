class Account {
    constructor (accountNo, ownerName, balance){
        this.accountNo = accountNo;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    deposit(money) {
        this.balance += money;
    }
    withdraw(money){
        this.balance -= money;
    }
    displayAccount(){
        document.write(`계좌번호 : ${this.accountNo}<br>`);
        document.write(`예금주 이름 : ${this.ownerName}<br>`);
        document.write(`잔액 : ${this.balance}<hr>`);
    }
}

const dog = new Account("111-222-333333","박밍키",50000);
const cat = new Account("555-666-777777","임희동",100000);
dog.deposit(100000);
cat.withdraw(30000);
dog.displayAccount();
cat.displayAccount();
