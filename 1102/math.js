let result =  Math.floor(Math.random()*4);
console.log(result);

let 무작위단어  = ["감자", "공주", "침팬지", "타잔"];
let 랜덤인덱스 = Math.floor(Math.random()*무작위단어.length);
console.log(무작위단어[랜덤인덱스]);


let answer = [
    "좋은 생각이에요.",
"네, 꼭 해보세요.", "별로 좋은 생각 같지 않아요.",
"오늘은 안 해도 되지 않을까요?","컴퓨터는 하지 말라고 하네요."];

result = answer[Math.floor(Math.random()*answer.length)];
console.log(result);

let color = ["푸른", "붉은", "검은", "하얀"];
let nature = ["늑대", "태양", "독수리", "바람"];
let word = ["눈물", "환생","기상", "일격", "유령"];

let randomClr = color[Math.floor(Math.random()*color.length)];
let randomNtr = nature[Math.floor(Math.random()*nature.length)];
let randomWord = word[Math.floor(Math.random()*word.length)];

console.log( randomClr +" "+ randomNtr + "의 "+randomWord);

// 프롬프트로 숫자를 받아서 
let input = prompt("원하는 숫자를 입력하세요");

