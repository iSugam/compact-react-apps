import React from 'react';
import { Zoom } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const FoodItems = ({ fetch, setFetch }) => {
    const uniId = "newidsforeveryelement"
    return (
        <div className="card-container">
            {
                fetch.map((item, index) => {
                    const {id, name, itemLeft, image, description} = item;
                    return <Zoom in={true} timeout={1000} key={uuidv4()}>
                        <div className="card">
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
                                        <div className="order-now"><button>Order Now</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                }) 
            }
        </div>
    )
}

export default FoodItems;