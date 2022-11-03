
let num = Math.floor(Math.random()*10)+1; 
// 1~10 중 랜덤 숫자 받기
let input;
let array = [];

for(i=0; i < num; i++) {
    input = parseInt(prompt("정수를 입력해주세요 (횟수는 1~10 중 랜덤)"));
    array.push(input);
}
document.write("let array = "+array+"</br>");

for(let i=0; i < array.length; i++){
    for(let j=0; j < array[i]; j++){
        document.write("*");
    }
    document.write(`${array[i]}</br>`);
}
