import {useNavigate} from "react-router-dom"


const Home=()=>{
const navigate=useNavigate()

const toRegister=()=>{
  
  navigate("/register")
}
const toLogin=()=>{
  
  navigate("/login")
}   
    return (<> 
    <p>Welcome  Abode</p>
       <button onClick={toRegister}>Register</button>
       <button onClick={toLogin}>login</button>
       
       
       </>
      
    )
}

export default Home