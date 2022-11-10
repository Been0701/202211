let state;
class Dice{
    constructor(){
        this.state = 1;
    }
    roll(){
        this.state = Math.floor(Math.random()*6)+1;
        return this.state;
    }
    display(){
        return this.state.toString();
    }
}

let dice = new Dice();
let div = document.getElementById('resultImg');
function diceRoll() {
    div.innerHTML = "";
    document.getElementsByClassName("diceGif")[0].classList.add("show");
    dice.roll();
   
}
function diceDp() {
    document.getElementsByClassName("diceGif")[0].classList.remove("show");
    let img = document.createElement("img");
    
    let num = dice.state;
    
    switch(num) {
        case 1: img.src = "1.png";break;
        case 2: img.src = "2.png";break;
        case 3: img.src = "3.png";break;
        case 4: img.src = "4.png";break;
        case 5: img.src = "5.png";break;
        case 6: img.src = "6.png";break;
    }
    div.appendChild(img);
    let result = dice.display();
    let comment = document.createElement("p");
    comment.innerHTML = `현재 주사위의 상태는 ${result}입니다.`;
    div.appendChild(comment);
}
document.querySelector("#roll").addEventListener("click", diceRoll);
document.querySelector("#chk").addEventListener("click", diceDp);


