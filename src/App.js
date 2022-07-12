import './App.css';
import Resturant from './component/Resturant/Resturant';
import Todo from './component/Todo/Todo';

function App(props) {
  return (
    <div className="container">
      {/* <Resturant /> */}
      <Todo />
    </div>
  );
}

export default App;
