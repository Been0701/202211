import React from 'react';

const Profile = (props) => {
    const {src, name, age, local} = props;
    return (
        <div className="profile">
            <img src={src} alt="profile"></img>
            <div className='info'>
            <div>이름 : {name}</div>
            <div>나이 : {age}</div>
            <div>지역 : {local}</div>
            </div>
        </div>
    );
};

export default Profile;