class FourCal {
    add(a, b) {
        return document.write(`두 수를 더한 값 : ${a+b} <br>`);
    }
    sub(a, b) {
        return document.write(`두 수를 뺀 값 : ${a-b} <br>`);
    }
    mul(a, b){
        return document.write(`두 수를 뺀 값 : ${a*b} <br>`);
    }
    div(a, b){
        return document.write(`두 수를 뺀 값 : ${a/b} <br>`);
    }
}

let num1 = parseInt(prompt("첫 번째 숫자를 입력하세요"));
let num2 = parseInt(prompt("두 번째 숫자를 입력하세요"));
let calc = new FourCal();

calc.add(num1, num2);
calc.sub(num1, num2);
calc.mul(num1, num2);
calc.div(num1, num2);