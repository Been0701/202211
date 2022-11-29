import React from 'react';

function ChildComp(props) {
    function undateValue(e){
        props.onAddData(e.target.value);
    }
    return (
        <div>
            <h3>입력 : <input type="text" onChange={undateValue}/></h3>
        </div>
    );
};

export default ChildComp;