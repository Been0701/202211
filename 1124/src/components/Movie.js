import React from 'react';

const Movie = (props) => {
    const {title, open, actor} = props; // 구조분해 방법을 많이 사용
    return (
        <>
            <div>영화 제목 : {title}</div>   
            <div>개봉 일자 : {open}</div>   
            <div>배우 : {actor}</div>   
        </>
    );
}
export default Movie;  