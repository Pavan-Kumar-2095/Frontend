import React, { useState , useEffect  }  from 'react'
import {Link} from 'react-router-dom'
import './Card.css'
export default function Card() {
 
  const [info, setinfo] = useState([]);
  const [loading, setloading] = useState("true");
  
  useEffect(() => {

  const shoot = async () => {

    try{
        const response = await fetch(` https://backend-ei59.onrender.com/news`);
        setloading("false")
        console.log(response)
        const data = await response.json();
        console.log(data)
        setinfo(data)
        console.log(info)
    }
    catch{
      setinfo([{headlines:"error",content:404 , date: "xx xxxxxx xxxx xx:xx"}])
    }
        
    
  };
  shoot();
    
},[]);

if(loading === "false"){
  return (
   
    <div  className='cardsection'>
      {info.map((ele)=>{
        return(
        <Link to={`/news/${ele._id}`} style={{ textDecoration: 'none' , color: 'white'}} className='card' key={ele._id}>

          <Link to={`/news/${ele._id}`}  style={{ textDecoration: 'none' }} className='prod'>{ele.date}</Link>
          <Link to={`/news/${ele._id}`}   style={{ textDecoration: 'none' , color: 'white'}}className='detail'><h5>{ele.headlines.slice(0,60)}...</h5></Link>

        </Link >
        )
      })}
    </div>
  )}

  else{
    return (
    <div class="loading-spinner">
      <div class="spinner"></div>
    </div>
    )
  }
  
}
