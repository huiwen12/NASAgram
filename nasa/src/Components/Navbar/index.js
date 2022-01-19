import React from "react"
import { Container, NavLink } from "./styles"
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'

const Navbar = () => {
    let navIcon = <RocketLaunchRoundedIcon />
    let navText = "Spacestagram"
 
    return( 
    <Container>
        <NavLink to='/'> 
            <center>
                {navIcon}
                <br/>
                {navText}
            </center> 
        </NavLink>
     </Container>)
}

export default Navbar