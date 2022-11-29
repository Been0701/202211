import './App.css';
import Profile from './Profile';


function App() {
    const names = ['HTML', 'CSS', 'Javascript', 'React'];
    const nameList = names.map(name => <li key={name}>{name}</li>);
    // const name = ["Lee","Kim","Park","Choi"];
    // const age = [20, 30, 25, 40];
    // const local = ["Seoul", "Busan", "Jeju", "Daegu"];
    return(
    <>
        {/* <ul>{nameList}</ul> */}
        
        <Profile name="Lee" age={20} local="Seoul" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
        <Profile name="Kim" age={30} local="Busan" src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <Profile name="Park" age={25} local="Jeju" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <Profile name="Choi" age={40} local="Daegu" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        
    </>
    );
}

export default App;
