import './App.css';
import NavBar from './components/navbar/NavBar';
import Filter from './components/filter/Filter';
import UserPostList from "./components/userpostlist/UserPostList"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Filter/>
      <UserPostList/>
    </div>
  );
}

export default App;
