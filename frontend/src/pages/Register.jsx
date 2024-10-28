import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
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
    //alert('Thanks for registering with us '+user.username )
    console.log(user);
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json ",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log("res fron server", res_data.extraDetails);
      if (response.ok) {
        //localStorage.setItem("token",res_data)
        storeTokenInLs(res_data.token);
        console.log("response from server", res_data);

        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
        toast.success("Registration sucessfull");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "70px",
                  border: "1px solid grey",
                  margin: "50px",
                  width: "400px",
                  height: "200px",
                }}
              >
                <br />
                <h1>BLoGs</h1>
                
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px",
                  }}
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="username"></label>
                    <input
                      style={{
                        width: "350px",
                        padding: "5px",
                        margin:"5px",
                        borderRadius:"8px",
                        height:"25px"
                      }}
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email"></label>
                    <input
                      style={{
                        width: "350px",
                        padding: "5px",
                     margin:"5px",
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
                  <div>
                    <label htmlFor="phone"></label>
                    <input
                      style={{
                        width: "350px",
                        padding: "5px",
                          margin:"5px",
                           borderRadius:"10px",
                                   height:"25px"
                      }}
                      type="number"
                      name="phone"
                      placeholder="enter phone number"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password"></label>
                    <input
                      style={{
                        width: "350px",
                        padding: "5px",
                          margin:"5px",
                           borderRadius:"10px",
                                   height:"25px"
                      }}
                      type="password"
                      name="password"
                      placeholder="create password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button
                    style={{
                      padding: "10px",
                      backgroundColor: "teal",
                       margin:"5px",
                        borderRadius:"10px",
                                height:"35px",
                                color:"white",
                    }}
                    type="submit"
                    className="btn btn-submit"
                  >
                    Sign Up
                  </button>
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
