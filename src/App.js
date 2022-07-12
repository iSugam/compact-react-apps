import './App.css';
import Resturant from './component/Resturant/Resturant';
import RouteComponents from './component/RouteComponents';
import Todo from './component/Todo/Todo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App(props) {
  return (
    <div className="container">
      <Router>
        <RouteComponents />
        <Routes>
          <Route path='/' element={<Todo />}>Todo</Route>
          <Route path='/resturant' element={<Resturant />}>Resturant</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
