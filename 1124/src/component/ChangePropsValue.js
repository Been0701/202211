import React from 'react';

// props는 읽기전용, 내용을 바꿀 수 없다!
function ChangePropsValue(props) {
    let name = props.name;
    
    function changeName(){
        name = "React";
        console.log(name);
    }
    
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>클릭</button>
        </div>
    );
};

export default ChangePropsValue;