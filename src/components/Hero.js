import React from 'react'
import './Hero.css'
import Footer from "../components/Footer"
export default function hero() {
  return (
    <div>
       <div className="homepage">
      <header className="header">
        <h1>.</h1>
        <p></p>
      </header>
      <section className="content">
        <div  
          className="main-image" 
        ></div>
        <p>
          Welcome to Gotham Insights! We provide up-to-date news and in-depth analysis on the most important events happening in Gotham City. 
          From politics to culture, our team delivers accurate and engaging content to keep you well-informed.
           Explore our latest articles and stay connected with what’s happening in Gotham.
        </p>
      </section>
      <Footer/>
    </div>
    </div>
  )
}
