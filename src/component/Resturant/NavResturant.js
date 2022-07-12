import React, { useState } from 'react'

const NavResturant = ({setFetch, menuCatagory, filterList}) => {
    const [navIcon, setNavIcon] = useState(false)

    const navbarToggle = () => {
        setNavIcon(!navIcon)
    }

    const capitalFirst = (item) => {
        return item.charAt(0).toUpperCase() + item.slice(1)
    }

    return (
        <header>
                <div className="logo">
                    <h3><button>Resturant</button></h3>
                </div>

                <nav className={!navIcon? 'navbar' : 'navbar active'}>
                    <ul className='navbar-ul'>
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

                <div onClick={navbarToggle} className="nav-icon">
                    <i className="fa-solid fa-bars"></i>
                </div>
        </header>
    )
}

export default NavResturant