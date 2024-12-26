import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
export default function MainPage() {

  const  [ vis , setvis] = useState("visible");
  const storedValue = sessionStorage.getItem("username");
  const cansee = async ()=>{

    if(vis==="visible"){
      setvis("hidden")
    }
    else{
      setvis("visible")
    }
  }
  
  return (
    <div className='nav'>
      <div className='logo' >
       <h1 style={{textDecoration:"none"}} className='logor' onClick={cansee}   >Global Insight</h1>
      </div>
      <div className='option' style={{ visibility:vis}}  >
        <Link to='/' style={{ textDecoration: 'none' , color: '#edf2f4' ,  visibility:vis}} className='links' ><h4 style={{ visibility:vis}}>HOME</h4></Link>
        <Link to='/news' style={{ textDecoration: 'none' , color: '#edf2f4' ,  visibility:vis }} className='links' ><h4 style={{ visibility:vis}} >NEWS</h4></Link>
        <Link to='/add'style={{ textDecoration: 'none' , color: '#edf2f4',  visibility:vis}} className='links' ><h4 style={{ visibility:vis}}>ADD</h4></Link>
        <Link to='/delete' style={{ textDecoration: 'none' , color: '#edf2f4',  visibility:vis }} className='links'><h4 style={{ visibility:vis}} >DELETE</h4></Link>
        <Link to='/' style={{ textDecoration: 'none' , color: '#22223b' ,  visibility:vis}} className='links' ><h4 style={{ visibility:vis}}> {storedValue}</h4> </Link>
      </div>
    </div>
  )
}
