import React, { useState } from 'react';
import "./routeComponents.css"
import { NavLink } from 'react-router-dom';


const RouteComponents = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)

    const toggleClick = () => {
        setSidebarToggle(!sidebarToggle)
    }
  return (
    <div className='nav'>
        <button className={!sidebarToggle? 'navButton' : 'navButton active'} onClick={toggleClick}><i className="fa-solid fa-arrow-right-long"></i></button>
        <aside className={sidebarToggle?"side-bar":"side-bar side-bar-active"}>
            <ul>
                <li><NavLink className="nav-link" to="/"><i className="fa-solid fa-pen-clip"></i> <div>Todo List</div> </NavLink></li>
                <li><NavLink className="nav-link" to="/resturant"> <i className="fa-solid fa-bowl-food"></i> <div>Resturant</div> </NavLink></li>
            </ul>
        </aside>
    </div>
  )
}

const rout = () => {
    return 
}

export default RouteComponents