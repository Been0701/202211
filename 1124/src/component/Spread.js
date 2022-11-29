import React from 'react';

function Spread() {
    const person1 = {name: 'yubeen'};
    // const person2 = {name: 'yubeen', age : 20};
    // const person2 = person1;
    // person2.age = 20;
    const person2 = {...person1, age: 20};
    // const person3 = {name: 'yubeen', age : 20, region:'seoul'};
    // const person3 = person2;
    // person3.region = 'seoul';
    const person3 = {...person2, region: 'seoul'};
    // const person4 = {...person3, region: 'busan'}; // 순서 중요!
    const person4 = {region:'busan', ...person3}; // 동일한 키에 새로운 값 seoul로 덮어씌워짐
    return (
        <div>
            <h1>person1 = {JSON.stringify(person1)}</h1>
            <h1>person2 = {JSON.stringify(person2)}</h1>
            <h1>person3 = {JSON.stringify(person3)}</h1>
            <h1>person4 = {JSON.stringify(person4)}</h1>
        </div>
    );
};

export default Spread;