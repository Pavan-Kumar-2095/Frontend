import React from 'react'
import './Shop.css'
import Card from '../components/Card';
import Footer from "../components/Footer"
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
