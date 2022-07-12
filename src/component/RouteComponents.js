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
                <li onClick={() =>setSidebarToggle(!sidebarToggle)}><NavLink className="nav-link" to="/"><i className="fa-solid fa-pen-clip"></i> <span>Todo List</span> </NavLink></li>
                <li onClick={() =>setSidebarToggle(!sidebarToggle)}><NavLink className="nav-link" to="/resturant"> <i className="fa-solid fa-bowl-food"></i> <span>Resturant</span> </NavLink></li>
            </ul>
        </aside>
    </div>
  )
}

const rout = () => {
    return 
}

export default RouteComponents