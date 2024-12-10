import React from 'react'
import './News.css'
import Card from '../components/Card';
import Footer from "./Footer"
export default function Shop() {
  return (
    <div className='padding'>
        <div className='shoping'>
            <h1 className='shop'>NEWS</h1>
        </div>
        <Card/>
        <Footer/>
    </div>
  )
}
