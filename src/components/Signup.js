import React from 'react'
import './Signup.css'
import Footer from "../components/Footer"
import {useState} from 'react'
import {Link} from 'react-router-dom'
export default function Signup() {
    const  [ username , setusername] = useState("");
    const  [ password , setpassword] = useState("");
    const  [ vis , setvis] = useState("hidden");


    const check =(e)=>{

        e.preventDefault();
        const udetailes = { username , password}
        console.log(username,password);
        setvis("visible")
  
      
      fetch(`https://backend-ei59.onrender.com/signup`,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(udetailes)
      }).then(()=>{
        console.log("complete")
      }).catch((err)=>{
        console.log("error",err)
      });
    
      setTimeout(() => {
        setvis("hidden");
      }, 2000);

      setpassword("")
      setusername("")

  };

  return (
    <div >
      <div className='input'>
        <form onSubmit={check}>
        <div className='padd'>
        <h1> Sign-up </h1>
        <input type='text' alt='input' required value={username} placeholder='   username' className='box'    onChange={(e)=> setusername(e.target.value)}></input>
        </div>
        <div className='padd'>
        <input type='text' alt='input' required value={password} className='box' placeholder='   password'   onChange={(e)=> setpassword(e.target.value)}></input>
        </div>
        <button   className='button'><h3>SUBMIT</h3></button>
        <p>already have an account? then</p>
        <Link to='/add' className='submit'> Login </Link>
        <button   className='Abutton' style={{visibility:vis}}><h5>Account Created</h5></button>
        </form>
        </div>
        <Footer/>
    </div>
  )
}
