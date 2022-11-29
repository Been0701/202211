import React from 'react';

const Name = ({name}) => {
    return (
        <div>
           <div>안녕하세요! 제 이름은 {name}입니다.</div> 
        </div>
    );
};

Name.defaultProps = {name :"홍길동"};

export default Name;