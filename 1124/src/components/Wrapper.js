import React from 'react';

const Wrapper = ({children}) => { // children 이름 바꾸면 안 돼~
    const style = {
        border : '3px solid red',
        padding : '20px'
    }
    return (
        <div style={style}>
            {children}
        </div>
    );
};

export default Wrapper;