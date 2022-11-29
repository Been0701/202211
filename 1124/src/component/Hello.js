import React, { useState } from 'react';
function Hello(){
    // useState 여러번 사용 가능!
    const [value, setValue] = useState('안녕하세요');
    const [font, setFont] = useState('50px');

    //setValue()로 내용 변경 가능!
    function changeValue(){
        setValue('반가워요');
    }
    const fstyle = {fontSize : font};
    return (
        <div>
            <div style={fstyle}>{value}</div>
            <button onClick={changeValue}>클릭</button>
        </div>
    );
}
export default Hello;