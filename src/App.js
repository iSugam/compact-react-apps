import './App.css';
import Resturant from './component/Resturant/Resturant';
import RouteComponents from './component/RouteComponents';
import Todo from './component/Todo/Todo';
import Weather from './component/Weather/Weather';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App(props) {
  return (
    <div className="container">
      <Router>
        <RouteComponents />
        <Routes>
          <Route path='/' element={<Todo />}></Route>
          <Route path='/resturant' element={<Resturant />}></Route>
          <Route path='/weather' element={<Weather />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
