import './App.css';
import PriceList from './components/PriceList';
import Exercise from './components/Exercise';
import MovieComponent from './components/MovieComponent';
import ChangePropsValue from './components/ChangePropsValue';

function App() {
    const todoList = [
        {taskName: '빨래하기', finished:false},
        {taskName: '공부하기', finished:true} 
    ];
    const movieList = [
      {
      title : "공조2: 인터내셔날",
      open : "2022.09.07",
      img : "https://movie-phinf.pstatic.net/20220826_188/1661489945659Su2RI_JPEG/movie_image.jpg?type=m203_290_2"
      },
      {
      title : "인생은 아름다워",
      open : "2022.09.28",
      img : "https://movie-phinf.pstatic.net/20220929_135/1664441921246ae2RC_JPEG/movie_image.jpg?type=m203_290_2"
      },
      {
      title : "정직한 후보2",
      open : "2022.09.28",
      img : "https://movie-phinf.pstatic.net/20220928_85/1664332929020nYWPc_JPEG/movie_image.jpg?type=m203_290_2"
      }
      ];
      const priceList = [1000, 2000, 3000, 4000];
      const prices = priceList.map(price => <div>가격 : {price}원</div>)

    return (
      <>
        <PriceList prices={prices}/>
        {
            todoList.map(todo => <div key={todo.taskName}> {todo.taskName}</div>)
        }
        {
          movieList.map(movie => <MovieComponent title={movie.title} open={movie.open} img={movie.img}/>)
        }
        <Exercise movieList = {movieList}/>
        <ChangePropsValue name="yubeen"/>
      </>
    );
  }
  
  export default App;
  