import './App.css';
import {Counter} from './Counter';
import {GetMovieList} from './fetchapi'
function App() {
  GetMovieList(2015);
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
