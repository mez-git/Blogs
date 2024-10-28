import { NavLink } from "react-router-dom"

import { useAuth } from "../store/auth"


const Navbar=()=>{
    const{isLoggedIn}=useAuth()
    return(
        <>
        <header>
<div className="container">
  
    <nav>
        <ul> 
            
            <li> <NavLink to="/contact">Contact </NavLink></li>

            
            
            {isLoggedIn?         
           <> 
            
           <li> <NavLink to="/Contents">Contents </NavLink></li>
           <li> <NavLink to="/logout">LogOut</NavLink></li></> 
            :<><li> <NavLink to="/Register">Register</NavLink></li>
            <li> <NavLink to="/login">Login</NavLink></li></>}
   

        </ul>
    </nav>
</div>



        </header>
        
        
        </>
    )
}


export default Navbar