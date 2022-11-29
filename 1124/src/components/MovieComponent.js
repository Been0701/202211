import React from 'react';

const MovieComponent = ({title, open, img}) => {
    return (
        <div>
            <h2>영화 제목 : {title}</h2>
            <h2>개봉 일자: {open}</h2>
            <img src={img} alt="포스터"/>
        </div>
    );
};

export default MovieComponent;