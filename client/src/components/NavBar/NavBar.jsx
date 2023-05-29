import { NavLink } from "react-router-dom";
import "./NavBar.css"
import mundito from "./assets/MyWorld.png"
import { getCountries } from "../../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from 'react'

const NavBar = () => {

    const [isOpen, setIsOpen]  = useState(false)
    const dispatch = useDispatch();

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const reload = () => {
        dispatch(getCountries());
    }

    return(
        <div className="navBar">

            <div className={`nav-toggle ${isOpen && 'open'}`} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <img onClick={reload} className={"mundito"} src={mundito} alt="" />
        
    
            <div className={`nav-links ${isOpen && 'open'}`}>
                <NavLink onClick={reload} className="btnNav" to='/home'> Home </NavLink>

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