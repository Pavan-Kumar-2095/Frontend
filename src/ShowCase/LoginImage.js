import React from 'react'
import  './LoginImage.css'
import { Link } from 'react-router-dom';

export default function hero() {

  return (
    <div class="center-container">
  <div class="center-content">
    <h2>Login to ADD</h2>
    <p>Click on Home and Login</p>
    <Link to="/">Home</Link>
  </div>
</div>
    
  )
}
