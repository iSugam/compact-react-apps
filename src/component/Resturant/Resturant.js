import { useState } from "react";
import "./resturant.css";
import FoodItems from "./FoodItems";
import Menu from "./menuAPI";
import NavResturant from "./NavResturant";
const uniqueCatagory = [
    ...new Set(Menu.map(item => item.catagory)),
    "All"
]
console.log(uniqueCatagory);
const Resturant = () => {
    const [fetchApi, setFetchApi] = useState(Menu)
    const [menuCatagory] = useState(uniqueCatagory)

    const filterList = (itemName) => {
        const updateData = Menu.filter((item) => {
            return item.catagory === itemName;
        })
        setFetchApi(updateData)
    }
  return ( 
    <div>
        <NavResturant menuCatagory = {menuCatagory} setFetch = {() => setFetchApi(Menu)} filterList ={filterList}/>
        <FoodItems fetch={fetchApi} setFetch={setFetchApi}/>
    </div>
  )
}

export default Resturant