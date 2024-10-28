import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services,setServices]=useState([])
  const storeTokenInLs = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  //the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //jwt AUTHENTICATION--TO GET THE CURRENTLY LOGGED IN USER DATA
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("error in fetching user data");
    }
  };

//to fetch the services data from the database
const getServices=async()=>{
  try {
    const response=await fetch ("http://localhost:5000/api/data/service",{
      method:"GET",
    });

    if (response.ok){
      const data=await response.json()
      console.log(data.msg)
      setServices(data.msg)
    }
  } catch (error) {
    console/log(`services frontend error:${error}`); 
  }
}


  useEffect(() => {
    getServices()
    userAuthentication();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLs, LogoutUser, user,services }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside the Provider");
  }
  return authContextValue;
};
