import './App.css';
import {Counter} from './Counter';
import {GetMovieList} from './fetchapi'
function App() {
  return (
    <div className="App">
      <GetMovieList />
      <Counter />
    </div>
  );
}

export default App;
