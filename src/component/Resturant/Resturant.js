import { useEffect, useState } from "react";
import "./resturant.css";
import Menu from "./menuAPI";
import ResturantNavbar from "./ResturantNavbar";

const Resturant = () => {
    const [fetchApi, setFetchApi] = useState([])

    useEffect(() => {
        setFetchApi([...fetchApi, ...Menu])
    }, [Menu])

    return ( <div>
        <ResturantNavbar />
        <div className="card-container">
            {
                fetchApi.map((item, index) => {
                    const {name, itemLeft, catagory, image, description} = item
                    return <div className="card" key={index}>
                    <div className="card-body">
                        <div className="card-foods">
                            <span>{name}</span>
                            <span>Item left {itemLeft}</span>
                        </div>

                        <div className="food-container">
                            <div className="card-image">
                                <img src={image} alt="" />
                            </div>
                            <div className="card-descriptions">
                                <p>{description}</p>
                                <div className="order-now"><a href="#">Order Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                })
            }
        </div>
        </div>
        
    )
}

export default Resturant