import React, { useState } from 'react';

function Login ()  {
    const [value, setValue] = useState('안녕하세요');
    function loginHandler(){
        setValue('로그인되었습니다.');
    }
    function logoutHandler(){
        setValue('로그아웃되었습니다.');
    }
    return (
        <div>
            <div>{value}</div>
            <button onClick={loginHandler}>로그인</button>
            <button onClick={logoutHandler}>로그아웃</button>
        </div>
    );
};

export default Login;