import React from 'react';
import PropTypes from 'prop-types';

const PropTypesComponent = ({name, favNum}) => {
    return (
        <div>
            안녕하세요! 제 이름은 {name}입니다.<br/>
            제가 좋아하는 숫자는 {favNum}입니다.
        </div>
    );
};
PropTypesComponent.propTypes = {
    name : PropTypes.string,
    favNum : PropTypes.number.isRequired
}

export default PropTypesComponent;