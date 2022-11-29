import './App.css';
import ChildComponent from './ChildComponent';
import Intro from './Intro.js';

function App() {
    const name = "react";
    const commonStyle = {
      fontSize:"50px",
      fontWeight:"bolder"
    }
    const nameStyle = {
      backgroundColor:"yellow"
    }
    const numStyle = {
      backgroundColor:"green"
    }
    const addrStyle = {
      backgroundColor:"blue"
    }
        return (
          // 감싸주는 태그와 닫는 태그 필수
    <div className="App">
      <h1>첫번째</h1><br/>
      <h2>리액트 실습</h2><br/>
      <h3>화이팅</h3>

        {/* 삼항 연산자 사용 */}
      {name === 'react'?(<div>리액트입니다.</div>):(<div>리액트가 아닙니다.</div>)}

      {/* 인라인 스타일 */}
          <div style={{backgroundColor : "blue", color : "yellow", fontSize: "50px", fontWeight: "bolder" }}>리액트</div>
          {/* <div className='react'>리액트</div> */}
          
          <Intro number={20} addr="서울" color={commonStyle} nameStyle={nameStyle} numStyle={numStyle} addrStyle={addrStyle}/>

          <ChildComponent>리액트</ChildComponent>
    </div>
  );
}

export default App;
