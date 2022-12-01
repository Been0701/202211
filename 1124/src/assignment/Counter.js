import React, { useState } from 'react';

function Counter() {
    let [value, setValue] = useState(0);
    function addBtnHandler(){
        
        setValue(++value);
    }
    return (
        <div>
            <div>{value}</div>
            <button onClick={addBtnHandler}>클릭</button>
        </div>
    );
};

export default Counter;