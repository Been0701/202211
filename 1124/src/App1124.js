// import logo from './logo.svg';
import './App.css';
import CreateBody from './components/CreateBody';
import CreateFooter from './components/CreateFooter';
import CreateHeader from './components/CreateHeader';
import Emotion from './components/Emotion';
import Movie from './components/Movie';
import Name from './components/Name';
import PropTypesComponent from './components/PropTypesComponent';
import Wrapper from './components/Wrapper';

function App() {

  return (
    <>
    <Wrapper>
      반갑습니다!
      <CreateHeader/>
      <CreateBody/>
      <CreateFooter/>
    </Wrapper>
    <PropTypesComponent name = "임유빈" favNum={3}/>
      <Movie title = "해리포터" open = "2000.08.15" actor="다니엘"/>
      <Movie title = "공조" open = "2021.09.25" actor="현빈"/>
      <Movie title = "공조2" open = "2022.09.25" />
      <Movie title = "공조3" open = "2023.12.25" />
      <div>지루할 때 : <b><Emotion bored /></b></div>
      <div>괜찮을 때 : <b><Emotion/></b></div>
      <Name name='임유빈'/>
      <Name/>
    </>
  );
}

export default App;
