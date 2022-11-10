class Animal {
    constructor(legs, color){
    this.legs = legs;
    this.color = color;
    }
    speak() {
        console.log("말해요");
    }
    sleep() {
        console.log("잘자요");
    }
}

class Dog extends Animal {
    constructor(legs, color, ownerName){
        super(legs, color);  // 부모코드를 복사해오도록
        this.ownerName = ownerName;
    }
    play(){
        console.log("놀아요!");
    }
    sleep(){
        super.sleep();
        console.log("많이 자요.");
    }
}

const dog = new Dog(4, "brown", "been");
dog.speak();
dog.play();
dog.sleep();