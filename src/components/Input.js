import { React , useState } from 'react'
import  './Input.css'
export default function Input() {

    const  [ headlines , setheadlines] = useState("");
    const  [ content , setcontent] = useState("");
    const  [ vis , setvis] = useState("hidden");

    const axiox =(e)=>{

      e.preventDefault();

      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      let now = new Date()
      let time = now.getDate () + " "  + months[now.getMonth()] + " " + now.getUTCFullYear()+ " " + now.getHours() + ":" + now.getMinutes()
   

      const blog = { headlines , content , time}
      console.log(headlines,content , time);
      setvis("visible")
      

    
    fetch(`http://localhost:8000/add`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
    }).then(()=>{
      console.log("complete")
    })
    setheadlines("")
    setcontent("")
    setTimeout(() => {
      setvis("hidden");
    }, 2000);
       
    }
  return (
    <div >
      <div className='input'>
        <form onSubmit={axiox}>
        <div className='padd'>
        <h4>ENTER HEADLINES </h4>
        <input type='text' alt='input' required value={headlines} className='box'    onChange={(e)=> setheadlines(e.target.value)}></input>
        </div>
        <div className='padd'>
        <h4>ENTER NEWS </h4>
        <input type='text' alt='input' required value={content} className='box'    onChange={(e)=> setcontent(e.target.value)}></input>
        </div>
        <button   className='button'><h3>SUBMIT</h3></button>
        <button   className='Abutton' style={{visibility:vis}}><h5>submitted</h5></button>
        </form>
        </div>
    </div>
  )
}
