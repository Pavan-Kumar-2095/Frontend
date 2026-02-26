import {React, useEffect ,useState  }from 'react'
import { useParams  }  from 'react-router-dom'
import './NewsBox.css'
// import Footer from "./Footer"

export default function Item() {

    const {id} = useParams();
    const [content, setcontent] = useState([{headlines:"error",content:"ERROR",URL:"https://via.placeholder.com/300" ,date:"xx xx xxxx" , AuthorName:"xxxxxxxxx",email:"xxxxx@gmail.com",_id:"123456789"}]);

    useEffect(()=>{
      
      const fetcher = async () =>{
  
        const response = await fetch(`https://backend-ei59.onrender.com/news/${id}`);
        const data = await response.json();
        console.log(data)
        setcontent(data)
        console.log(content)
      }
      fetcher();
    },[])


  return (
    <div className='item'>
      <div className='page'>
      <h3 className='headlines'>{content[0].headlines}</h3>
      <h4 className='date'>{content[0].date}</h4>
      <div className='img-container' >
        <img  src={content[0].URL} alt="Image" ></img>
      </div>
      <h5 className='content'  style={{ color:"#e9e8e3" , backgroundColor:" rgba(2, 135, 202, 0.1)"}}>{content[0].content}</h5>
      <h3 className='headlines'>post by {content[0].AuthorName}</h3>
      {/* <p>email : {content[0].email}</p> */}<br></br>
      <p>ID :  {content[0]._id}</p>
      </div>
    </div>
  )
}
