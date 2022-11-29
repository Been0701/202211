import React from 'react';

const Intro = ({name, number, addr, color, nameStyle, numStyle, addrStyle}) => {
    // defaultProps 에만 정의됐을 때 아래와 같이 선언하면 안 되는 이유는...?
    // const {name, number, addr, color} = props;
    return (
        <div>
            <h2>
            안녕하세요. 제 이름은 <span style={{...color, color:'blue',...nameStyle}}>{name}</span>입니다.<br/>
            저는 <span style={{...color, color:'red', ...numStyle}}>{number}</span>살이고, <span style={{...color, color:'orange', ...addrStyle}}>{addr}</span>에 살고 있습니다.
            </h2>
        </div>
    );
};

Intro.defaultProps = {
    name : "임유빈"
}
export default Intro;