import React, { useState } from 'react';

function EventOnChange ()  {
    const [message, setMessage] = useState('onChange 이벤트')

    // function printConsole(e){
    //     console.log(e.target.value);
    // }
    // function onChange(e){
    //     setMessage(e.target.value);
    // }
    return (
        <div>
            <h1>{message}</h1>
            <input type="text" name="msg1" onChange={(e)=>{console.log(e.target.value)}}></input>
            <input type="text" name="msg2" onChange={(e)=>{setMessage(e.target.value)}}></input>
        </div>
    );
};

export default EventOnChange;