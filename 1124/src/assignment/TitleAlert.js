import React, { useState } from 'react';

const TitleAlert = () => {
    const [message, setMessage] = useState({title:'제목', color:'black'});

    return (
        <div>
            <h2>{message.title}</h2>
            <hr/>
            <input type="text" placeholer="내용을 입력하세요"></input>
            <button>클릭</button>
        </div>
    );
};

export default TitleAlert;