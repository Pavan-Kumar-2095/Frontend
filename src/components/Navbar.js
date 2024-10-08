import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
export default function MainPage() {

  const  [ vis , setvis] = useState("visible");

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
       <h1 style={{textDecoration:"none"}} className='logor' onClick={cansee}   >Gotham insights</h1>
      </div>
      <div className='option' style={{ visibility:vis}}  >
        <Link to='/' style={{ textDecoration: 'none' , color: 'yellow'}} className='links' ><h4>HOME</h4></Link>
        <Link to='/shop' style={{ textDecoration: 'none' , color: 'yellow' }} className='links' ><h4>NEWS</h4></Link>
        <Link to='/add'style={{ textDecoration: 'none' , color: 'yellow' }} className='links' ><h4>ADD</h4></Link>
        <Link to='/delete' style={{ textDecoration: 'none' , color: 'yellow' }} className='links'><h4>DELETE</h4></Link>
      </div>
    </div>
  )
}

