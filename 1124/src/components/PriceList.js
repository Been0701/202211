import React from 'react';

const PriceList = (props) => {
    const {prices} = props
    return (
        <div>
            <h2>가격 목록</h2>
            {prices}
        </div>
    );
};

export default PriceList;