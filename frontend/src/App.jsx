
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Contents from "./pages/Contents";

import Login from "./pages/Login";
import Logout from "./pages/Logout"
import Register from "./pages/Register";
import Nav from "./components/Nav"
import Blogs from "./blog/Blogs"
import Blog from "./blog/Blog"
import Error  from "./pages/Error"
export default function App() {
 
  return (

    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/contents" element={<Contents/>}/>
        
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/blogs/:cat" element={<Blogs />}/>
        <Route path="/blog/:id" element={<Blog />}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}