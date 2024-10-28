import { useParams } from "react-router-dom";
import {useAuth} from "../store/auth"
const Blog = () => {
  const { id } = useParams();
  const { services } = useAuth();
  console.log("id",id)
  
  const blog = services.find((b) => b.title === id);
  console.log({blog})

  return (
    <div  style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <br />
      <div           
                  >  
         {blog && (<div  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection:"",
                    padding:"25px",
                    border: "1px solid grey",
                    margin:"50px",
                      width:"50vh",
                      height:"50vh"
                  }}> 
          <div>
          <img src={blog.image} style={{ width: "100px" }} />
          <div  style={{
                display: "flex",
flexDirection:"column",

                justifyContent: "flex-start",
                alignItems:"flex-start"
              }}>
            <h1
            
            >
              {blog.title}
            </h1>
            <p>{blog.description}</p>
          </div>
        </div></div>
       
      )}</div>
   
    </div>
  );
};
export default Blog;