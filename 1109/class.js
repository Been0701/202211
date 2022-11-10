class Rectangle {
    static color = "red";
    #width;
    #height;

    constructor(w, h) {
      //객체를 생성하고 초기화
      this.#width = w;
      this.#height = h;
    }
    //클래스 내부에 명시적으로 정의한 프로토타입 메서드    
    area = () => console.log("사각형 넓이");
    
    get display(){
        return `가로는 ${this.#width}, 세로는${this.#height}입니다.`; 
    }
    set changeWidth(value){
        this.#width = value;
    }
  }

let rec1 = new Rectangle(100, 200);
let rec2 = new Rectangle(200, 500);
console.log(rec2.height);
rec1.area();
// console.log(Rectangle.color);
// console.log(rec1.color);

// getter 함수 호출
console.log(rec1.display);
// setter 함수 호출
rec1.changeWidth = 300;
console.log(rec1);