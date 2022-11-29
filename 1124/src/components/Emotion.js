import React from 'react';

const Emotion = ({bored}) => {
    return (
        <>
            {bored?(<div>집에 가자!</div>):(<div>하던거 마저 하자~</div>)}
        </>
    );
};

export default Emotion;