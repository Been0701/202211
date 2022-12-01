import React, { useState } from 'react';

const Counter1 = () => {
    let [number, setNumber] = useState(0);

    function addBtnHandler () {
        setNumber(++number);
    }

    function returnTozero(){
        setNumber(0);
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={addBtnHandler} onMouseOut={returnTozero}>클릭</button>       
        </div>
    );
};

export default Counter1;