import React from 'react'
import './Login.css'
import Footer from "../components/Footer"
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Signup() {
    const  [ username , setusername] = useState("");
    const  [ password , setpassword] = useState("");
    const  [ vis , setvis] = useState("hidden");
    const  [ visi , setvisi] = useState("hidden");
    let navigate = useNavigate();


    const bereal =async(e)=>{

        e.preventDefault();
        const udetailes = { username , password}
        console.log(username,password);
  
      
      const response = await fetch(`https://backend-ei59.onrender.com/login`,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(udetailes)
      })

      let data = await response.json();
      console.log(data)
      if(data.result === true){

        setvis("visible");
        setTimeout(() => {
          setvis("hidden");
        }, 2000);

        setTimeout(() => {
          navigate('/input');
        }, 2000);
      }
      else{
        setvisi("visible");
        setTimeout(() => {
          setvisi("hidden");
        }, 2000);
      }

      
    
    
      setpassword("")
      setusername("")

      
    
  };
  return (
    <div >
      <div className='linput'>
        <form onSubmit={bereal}>
        <div className='padd'>
        <h1> Log-in </h1>
        <input type='text' alt='input' required value={username} placeholder='   username' className='box'    onChange={(e)=> setusername(e.target.value)}></input>
        </div>
        <div className='padd'>
        <input type='text' alt='input' required value={password} className='box' placeholder='   password'   onChange={(e)=> setpassword(e.target.value)}></input>
        </div>
        <button   className='button'><h3>SUBMIT</h3></button>
        <p>don't have an account? then create one</p>
        <Link to='/signup' className='submit'> signup </Link>
        <button   className='Loggedbutton' style={{visibility:vis}}><h5>Logged-in</h5></button>
        <button   className='exitbutton' style={{visibility:visi}}><h5>user doesnot exist</h5></button>
        </form>
        </div>
        <Footer/>
    </div>
  )
 
}



