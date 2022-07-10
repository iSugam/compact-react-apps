import { useState } from "react";
import "./resturant.css";
import FoodItems from "./FoodItems";
import Menu from "./menuAPI";

const Resturant = () => {
    const [fetchApi, setFetchApi] = useState(Menu)
  return ( 
    <div>
        
        <header>
            <div className="logo">
                <h3><a href="">Resturant</a></h3>
            </div>
            <nav>
                <ul>
                    <li><a href="">Breakfast</a></li>
                    <li><a href="">Lunch</a></li>
                    <li><a href="">Snacks</a></li>
                </ul>
            </nav>
        </header>

        <FoodItems fetch={fetchApi} setFetch={setFetchApi}/>
    </div>
  )
}

export default Resturant