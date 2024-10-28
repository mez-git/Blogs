

import { NavLink } from "react-router-dom";
import {useAuth} from "../store/auth"
const Contents=()=>{
    const {user}=useAuth()
        const categories = ["Travel", "Food", "Dance", "Disco"];
        return (
          <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection:"column",
            

          }}>          
              <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection:"column",
            margin:"50px"

          }}
      > <br />

        <h1>Welcome {user? user.username:`to our website`}</h1>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent:"center",
            flexDirection:"row",
            flexWrap:"wrap"

          }}>
          {categories.map((each) => (
            
              <NavLink style={{
                textDecoration:"none",
                color:"white",
                display: "flex",
                backgroundColor:"teal",
                alignItems: "center",
                justifyContent: "center",
                flexDirection:"column",
                padding:"50px",
                borderRadius:"5px",
                border: "1px solid grey",
                margin:"10px",
                  width:"60px",
                  height:"40px"
              }} to={`/blogs/${each}`}>
                {each}
              </NavLink>
            
          ))}
        </div>
      </div></div>

        )
    
}

export default Contents 