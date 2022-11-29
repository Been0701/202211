import React from 'react';

const ChildComponent = ({children}) => {
    return (
        <div>
          chilren 값은 {children}입니다.
        </div>
    );
};

export default ChildComponent;