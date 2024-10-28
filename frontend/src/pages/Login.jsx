import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom"
const Login = () => {
    const navigate=useNavigate()


  const [user, setUser] = useState({
    email: "",

    password: "",
  });

  
  const { storeTokenInLs } = useAuth();
  //handling input
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  //handling form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json ",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      if (response.ok) {
        //localStorage.setItem("token",res_data.token)
        storeTokenInLs(res_data.token);
        setUser({
          email: "",

          password: "",
        });

        navigate("/Contents");
        toast.success("Login sucessfull");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }

      console.log("login", response);
    } catch (error) {
      console.log("register", error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection:"column",
                

              }}
            >
            
              <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection:"column",
                    padding:"25px",
                    border: "1px solid grey",
                    margin:"50px",
                      width:"400px",
                      height:"200px"
                  }}
              >
                <h1 >BLoGs</h1>
                <br />
                <form onSubmit={handleSubmit} style={{display:"flex",
                  flexDirection:"column",
                  padding:"5px",
                }}>
                  <div >
                    <label htmlFor="email"></label>
                    <input
                    style={{padding:"5px",
                      width:"350px",
                       borderRadius:"10px",
                              height:"25px"
                    }}
                      type="text"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="password"></label>
                    <input
                     style={{
                      width:"350px",
                      padding:"5px",
                       borderRadius:"10px",
                              height:"25px"
                    }}
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                     
                 <button style={{
                  
                  padding:"5px",
                   borderRadius:"10px",
                              height:"35px",
                              color:"white",
                  backgroundColor:"teal"}} type="submit" >
                    Login
                  </button>
                 <br />

                </form>
         
              </div>
              <div  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection:"row",
                    padding:"25px",
                    border: "1px solid grey",
                    margin:"10px",
                    width:"400px"
                }}>
                    <p>Don't have an account?  </p>        
                  <NavLink to="/Register">Sign Up </NavLink>
                  </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
