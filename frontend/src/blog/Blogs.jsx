import { NavLink } from "react-router-dom";
import {useAuth} from "../store/auth"

import { useParams } from "react-router-dom";
const Blogs=()=>{
    const {cat}=useParams()
    const { services } = useAuth();
    console.log(cat)
    
    const filteredBlogs=services.filter((blog)=>blog.category.includes(cat));
    
    return(
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
          flexDirection:"column",
          flexWrap:"wrap"

        }}> 
    {filteredBlogs.map((blog) => (
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
        width:"500px",
        height:"40px"
    }}  to={`/blog/${blog.title}`}>
     {blog.title}
     <br />
     
   </NavLink>))}
       
        
    
            
               
    
      </div>
    )
    
}
export default Blogs