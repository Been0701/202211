class Goods {
    constructor(code, amount){
        this.code = code;
        this.amount = amount;
    }
    addStock(amount){
        this.amount += amount;
    }
    display(){
        document.write(`상품코드 : ${this.code}<br>`);
        document.write(`재고수량 : ${this.amount}`);
    }
}

let code = prompt("코드를 입력해주세요");
let amount = parseInt(prompt("수량을 입력해주세요"));
let goods = new Goods(code, amount);
alert("상품코드 : "+goods.code+"\n재고수량 : "+goods.amount);
let add = parseInt(prompt("추가할 수량을 입력하세요"));
goods.addStock(add);
goods.display();

