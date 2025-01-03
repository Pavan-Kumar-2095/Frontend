import { React , useState } from 'react'
import  './Add.css'
import Footer from "../components/Footer"


import LoginImage from '../ShowCase/LoginImage'; 

export default function Input() {

    const [ Imageurl , setImageurl ] = useState("https://via.placeholder.com/300")

    const  [ headlines , setheadlines] = useState("");
    const  [ content , setcontent] = useState("");
    const  [ vis , setvis] = useState("hidden");


    const upload = async (e) => {
      const photo = e.target.files[0];
      const formData = new FormData();
      formData.append("file", photo);
    
      const options = {
        method: "POST",
        body: formData,
      };
    
      try {
        const res = await fetch("https://backend-ei59.onrender.com/upload", options);
        const data = await res.json(); 
        console.log(data);  
        setImageurl(data.imageUrl); 
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
    
    const axiox =(e)=>{
    
      e.preventDefault();

      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      let now = new Date()
      let time = now.getDate () + " "  + months[now.getMonth()] + " " + now.getUTCFullYear()+ " " + now.getHours() + ":" + now.getMinutes()
   
      const author = sessionStorage.getItem('username');
      const authorEmail = sessionStorage.getItem('userMail');
      const blog = { headlines , content , time , author , authorEmail , Imageurl }
      console.log(headlines,content , time,author,authorEmail,blog);
      setvis("visible")
      

    
    fetch(`https://backend-ei59.onrender.com/add`,{
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
  
  let data = sessionStorage.getItem("key"); 
  console.log(data)
  if(data==="return"){  
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
        <br></br>
        <h4>Upload Image </h4>
        <br></br>
        <input type='file' accept='image/*' id='Ifile'onChange={upload} required ></input>
        <button   className='button'><h3>SUBMIT</h3></button>
        <button   className='Abutton' style={{visibility:vis}}><h5>submitted</h5></button>
        </form>
        </div>
        <Footer/>
    </div>
  )
}
  else{
   return (
    <div>
      <LoginImage/>
      <Footer/>
    </div>
   )
  }}
