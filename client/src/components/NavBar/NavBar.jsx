import { NavLink } from "react-router-dom";
import "./NavBar.css"
import mundito from "./assets/MyWorld.png"
import { useState } from 'react'

const NavBar = () => {

    const [isOpen, setIsOpen]  = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className="navBar">

            <div className={`nav-toggle ${isOpen && 'open'}`} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <img className={"mundito"} src={mundito} alt="" />
        
    
            <div className={`nav-links ${isOpen && 'open'}`}>
                <NavLink className="btnNav" to='/home'> Home </NavLink>

                <NavLink className="btnNav" to='/activities'> Activities </NavLink>
                
                <NavLink className="btnNav" to='/create'> Create Activity </NavLink>
            </div>

            <div className={"p"}>
                <p>hola</p>
            </div>

        </div>
    )
}

export default NavBar;