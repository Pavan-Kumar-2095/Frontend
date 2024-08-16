import {React, useEffect ,useState  }from 'react'
import { useParams  }  from 'react-router-dom'
import './Item.css'
import Footer from "../components/Footer"

export default function Item() {

    const {id} = useParams();
    const [kana, setkana] = useState([{_id:404,headlines:"error",content:"ERROR"}]);

    useEffect(()=>{
      
      const fetcher = async () =>{
        try{
        const response = await fetch(`https://backend-ei59.onrender.com/shop/${id}`);
        const data = await response.json();
        console.log(data)
        setkana(data)
        console.log(kana)
      }
      catch{
        setkana({_id:404,headlines:"error",content:"ERROR"})
      }}

      fetcher();
    },[])


  return (
    <div className='item'>
      <div className='page'>
      <h3 className='headlines'>{kana[0].headlines}</h3>
      <h4 className='date'>{kana[0].date}</h4>
      <h5 className='content'>{kana[0].content}</h5>
      <p>ID :  {id} <Footer/></p>
      </div>
    </div>
  )
}
