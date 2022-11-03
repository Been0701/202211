let fruits = ["딸기", "바나나", "사과", "오렌지", "포도"];
      document.write(fruits[2]);
      // 원소 내용 바꾸기
      fruits[2] = "apple";
      document.write(fruits[2]);

// 배열 생성하기
let 과일 = [];
과일[0] = "apple";
과일[1] = "banana";
과일[2] = "melon";
document.write(과일);
      
let 과일과숫자 = [3, "fruit", ["apple", "orange"], 5];
console.log(과일과숫자[2]);
console.log(과일과숫자[2][1]);

// 배열 전체 출력하기
for(let i = 0; i < 과일.length; i++){
console.log(과일[i]);
}

let 동물 = [];
// 원소 뒤에 추가  `push`
동물.push("고양이");
동물.push("강아지");
동물.push("라마");
console.log(동물);
console.log(동물.length);

// 원소 앞에 추가  `unshift`
console.log("첫 번째 원소 추가 : "+동물.unshift("원숭이"));
console.log("두 번째 원소 추가 : "+동물.unshift("북극곰"));
console.log(동물);

// 뒤에서 원소 제거 `pop`
console.log("마지막 동물 : "+동물.pop());
console.log(동물);

// 앞에서 원소 제거 `shift`
console.log("첫번째 동물 : "+동물.shift());
console.log(동물);

// 배열끼리 연결  `concat`
let 친구 = ["파랑새","릴라"];
let 가족 = ["엄빠", "언니"];
let 지인 = ["안녕","피자"];
let 친구가족지인 = 친구.concat(가족,지인);
console.log(친구가족지인);
console.log(친구);
console.log(가족);

// 원소 인덱스 찾기
let color = ["red", "green", "blue"];
console.log(color.indexOf("blue"));
console.log(color.indexOf("pink"));  // 배열에 없으면 -1 반환

// 원소들을 하나의 문자열로 만들기
let 착한동물 = ["원숭이", "고양이", "물고기", "도마뱀"];
console.log(착한동물.join());
console.log(착한동물.join("-"));
console.log(착한동물.join("보다 "));
