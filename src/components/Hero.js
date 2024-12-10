import React from 'react'
import './Hero.css'
import Footer from "../components/Footer"

import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';


export default function hero() {
  return (
    <div>
       <div className="homepage">
      <section className="content">
        <div  
          className="main-image" 
        ></div>
        <p>
          Welcome to Gotham Insights! We provide up-to-date news and in-depth analysis on the most important events happening in Gotham City. 
          From politics to culture, our team delivers accurate and engaging content to keep you well-informed.
           Explore our latest articles and stay connected with what’s happening in Gotham.
        </p>

        <div>
        <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    const token = credentialResponse.credential;
                    const decoded = jwtDecode(token);
                    console.log(decoded, decoded.email); // You can access the decoded email here
                    sessionStorage.setItem('key', 'return');
                    sessionStorage.setItem('username', decoded.given_name);
                    sessionStorage.setItem('userMail', decoded.email);
                    window.location.href = window.location.href;

                }}
                onError={() => {
                    console.log('Login Failed');
                    sessionStorage.setItem('username',"username");
                }}
                useOneTap
                className="google-login-btn"  // Add the class for styling
            />
        </div>


      </section>
     
      <Footer/>
    </div>
    </div>
  )
}
