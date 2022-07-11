import React from 'react'

const NavResturant = ({setFetch, menuCatagory, filterList}) => {

    const capitalFirst = (item) => {
        return item.charAt(0).toUpperCase() + item.slice(1)
    }

    return (
        <header>
                <div className="logo">
                    <h3><button>Resturant</button></h3>
                </div>

                <nav>
                    <ul>
                        {
                            menuCatagory.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <button onClick={() => item === "All"? setFetch() : filterList(item)}>
                                        {capitalFirst(item)}
                                        </button>
                                    </li>
                                )
                            })
                            
                        }
                    </ul>
                </nav>
        </header>
    )
}

export default NavResturant