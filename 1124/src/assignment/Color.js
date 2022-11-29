import React, { useState } from 'react';

function Color () {
    const [color, setColor] = useState("black");
    const style = { color : color };
    function btnColorHandler(e){
        setColor(e.target.id);
    }
    return (
        <div>
            <div style={style}>글자색 바꾸기</div>
            <button onClick={btnColorHandler} id="red">빨간색</button>
            <button onClick={btnColorHandler} id="green">초록색</button>
            <button onClick={btnColorHandler} id="blue">파란색</button>
        </div>
    );
};

export default Color;