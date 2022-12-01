import CssModule from './1201/CssModule';
import GlobalStyle1 from './1201/GlobalStyle1';
import GlobalStyle2 from './1201/GlobalStyle2';
import './App.css';
import styled from "styled-components";

function App() {
  const Button = styled.button`
    background: ${(props) => (props.primary ? "pink" : "white")};
    color : ${(props) => (props.primary ? "white" : "pink")};
    font-size : 1em;
    margin : 1em;
    padding: 0.25em 1em;
    border : 2px solid pink;
    border-radius: 3px;
  `;


  const Title = styled.h1`
    font-size : 1.5em;
    text-align: center;
    color:purple;
  `;
  
  const Wrapper = styled.div`
    padding: 4em;
    background: papayawhip;
  `;
    return (
      <>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <Wrapper>
          <Title>안녕하세요</Title>
        </Wrapper>
        <CssModule/>
        <GlobalStyle1/>
        <GlobalStyle2/>
      </>
    );
  }
  
  export default App;
  