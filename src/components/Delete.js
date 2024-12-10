import { React , useState} from 'react'
import  './Delete.css'
import Footer from "../components/Footer"
import LoginImage from '../ShowCase/LoginImage'; 

export default function Input() {

    let mail = sessionStorage.getItem("userMail"); 

    const  [ id , setid] = useState("");
    
    const axioz =(e)=>{

      e.preventDefault();
      const blog = { id , mail}
      console.log(blog);

    
    fetch(`https://backend-ei59.onrender.com/delete`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
    }).then(()=>{
      console.log("complete")
    })
    setid("")
       
}
let data = sessionStorage.getItem("key"); 
  console.log(data)
if(data==="return"){
  return (
    <div >
      <div className='input1'>
        <form onSubmit={axioz}>
        <h4>ENTER ID OF NEWS TO DELETE</h4>
        <input type='text' alt='input' required value={id} className='box1' onChange={(e)=> setid(e.target.value)}></input>
        <button   className='button1'><h3>SUBMIT</h3></button>
        </form>
      </div>
        <Footer/>
    </div>
  )
}
else{
  return (
    <div >
        <LoginImage/>
        <Footer/>
    </div>
  )
}}