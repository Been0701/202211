class Student{
    constructor (name, gender, idNum, major,score){
        this.name = name;
        this.gender = gender;
        this.idNum = idNum;
        this.major = major;
        this.score = score;
    }
    display() {
        return document.write(
        `이름 : ${this.name}<br>
        성별 : ${this.gender}<br>
        학번 : ${this.idNum}<br>
        전공 : ${this.major}<br>
        학점 : ${this.score}<br>`)
    }
}

let john = new Student("john", "남성", 1111, "영어영문", 3.5);
let kate = new Student("kate", "여성", 2222, "국어국문", 4.2);
let minsu = new Student("minsu", "여성", 3333, "행정", 4.3);
let students = [john, kate, minsu];


function search(){
    let name = document.getElementById("stdName").value;
    // if (name instanceof Student) {
    // if (students.includes(name)) {
    for (let i = 0; i < students.length; i++){
        if(name == students[i].name ){
            students[i].display();
            break;
        } else {
            document.write("해당 학생은 존재하지 않습니다.");
            break;
        }
    }    
}