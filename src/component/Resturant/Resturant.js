import "./resturant.css"
const Resturant = () => {
  return (
    <div className="card-container">
        <div className="card">
            <div className="card-body">
                <div className="card-foods">
                    <span>Momo</span>
                    <span>Item left 3</span>
                </div>

                <div className="food-container">
                    <div className="card-image">
                        <img src="../assets/images/snacks/momo.webp" alt="" />
                    </div>
                    <div className="card-descriptions">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, enim doloribus? Porro qui saepe veniam!</p>
                        <div className="order-now"><a href="#">Order Now</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resturant