import { useState } from 'react';
import './App.css';
import Brother from './component/Brother';
import ChangeArray from './component/ChangeArray';
import ChangePropsValue from './component/ChangePropsValue';
import ChildComp from './component/ChildComp';
import Hello from './component/Hello';
import Spread from './component/Spread';

function App() {
    const [value, setValue] = useState('');

    function addDataHandler(data){
      setValue(data);
    }

    return (
      <>
        <ChangePropsValue name="yubeen"/>
        <Hello/>
        <Spread/>
        <ChangeArray/>
        <h3>ChildComponent로부터 전달받은 데이터 : {value}</h3>
        <ChildComp onAddData={addDataHandler}/>
        <Brother delivered={value}/>
      </>
    );
  }
  
  export default App;
  