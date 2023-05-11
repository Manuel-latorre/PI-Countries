import { NavLink } from "react-router-dom";


const NavBar = () => {
    return(
        <div>
            <NavLink to='/home'> Home </NavLink>

            <NavLink to='/create'>
                Form
            </NavLink>
        </div>
    )
}

export default NavBar;