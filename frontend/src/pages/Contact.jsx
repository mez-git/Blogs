import { useState } from "react"
import { useAuth } from "../store/auth"

const defaultContactFormData={
    username:"",
    email:"",
    message:"",

}




const Contact=()=>{
    const[contact,setContact]=useState(defaultContactFormData)

    const[userData,setUserData]=useState(true)

const {user}=useAuth()
if(userData&&user){
    setContact({
        username:user.username,
        email:user.email,
        message:"",
      })
      setUserData(false)
}
    //handling input
    const handleInput=(e)=>{
    console.log(e);
    let name =e.target.name
    let value=e.target.value
    setContact({
        ...contact,
        [name]:value
    
    })
    }
    //handling form submission
    
    const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(contact)
    try {
        const response =await fetch("http://localhost:5000/api/form/contact",{
          method:"POST", 
          headers:{
            'Content-Type':'application/json '
        },
        body:JSON.stringify(contact) 
        });
        if(response.ok){
            setContact(defaultContactFormData)
            const data=await response.json()
            console.log(data)
            alert ("Message sent successfully")
        }
        
    } catch (error) {
        alert ("Message not sent")
        console.log(error)
    }
    }
    return (
        <section>
        <main>
        <div >
          <div   
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection:"column",
                

              }}>
         
            <div         style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection:"column",
                    padding:"25px",
                    border: "1px solid grey",
                    margin:"50px",
                      width:"400px",
                      height:"400px"
                  }}>
                    <br />
                    <br />
                <h1 >Contact</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    
                <div>
                        <label htmlFor="username"></label>
                        <input  style={{
                      width:"350px",
                      padding:"5px",
                      
                       borderRadius:"10px",
                              height:"25px"
                    }}type="username"
                         name="username"
                         placeholder="username"
                         id="username"
                         required
                         autoComplete="off"
                         value={contact.username}
                         onChange={handleInput}
    
                         />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email"></label>
                        <input  style={{
                      width:"350px",
                      padding:"5px",
                       borderRadius:"10px",
                              height:"25px"
                    }} type="text"
                         name="email"
                         placeholder="enter your email"
                         id="email"
                         required
                         autoComplete="off"
                         value={contact.email}
                         onChange={handleInput}
                         />
                    </div>
                <div><p>Write your message below:</p>
                        <label htmlFor="message"></label>
                        <textarea style={{padding:"5px",
                      width:"350px",
                      margin:"5px",
                      borderRadius:"10px",
                    }}
                         name="message"
                         cols="30"
                         rows="10"
                         id="message"
                         required
                         autoComplete="off"
                         value={contact.message}
                         onChange={handleInput}
                         ></textarea>
                    </div>
                
                    <br />
                    <button   style={{
                      padding: "5px",
                      backgroundColor: "teal",
                       margin:"5px",
                       color:"white",
                    }} type="submit">
                        Submit
                    </button>
                    <br />
                </form>
    <br />
    <br />
    <br />
            </div>
           </div> 
        </div>
    </main>
    </section>
    )
}

export default Contact