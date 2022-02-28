import React, { useState } from 'react';
import "./Contact.css";
import Phone from "../../../img/phone.png";
import Email from "../../../img/email.png";
import Image1 from "../../../img/img1.png";
import { useRef} from "react";
import emailjs from '@emailjs/browser';


function Contact() {
    const formRef = useRef()
    const [done,setDone ] = useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault();
        emailjs.sendForm
        ('service_frzcs7h', 'template_rwray86', formRef.current, 'user_9R7IZkgP80zKQNAUBpA3A')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
          <h1 className="c-title"> Lets discuss your project</h1>
          <div className="c-info">
              <div className="c-info-item">
               <img 
               src={Phone} 
               alt="" 
               className="c-icon"/>

               +0465 383 161
              </div>
              <div className="c-info-item">
               <img 
               src={Email} 
               alt="" 
               className="c-icon"/>
                shahnk2004@gmail.com
              </div>
              <div className="c-info-item">
               <img 
               src={Image1} 
               alt="" 
               className="c-icon"/>

               Avenue de terveroun 66A Etterbeek,Brussels
              </div>
          </div>

          </div>
          <div className="c-right">
          <p className="c-desc">
              <b>Whats your story?</b>Get in touch.Always freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text"placeholder='Name'name='user_name'/>
              <input type="text"placeholder='Subject'name='user_subject'/>
              <input type="text"placeholder='Email'name='user_email'/>
              <textarea  rows="5" placeholder='Message'name="message"></textarea>
              <button>Submit</button>
              {done && "Thank you...."}


          </form>

          </div>
      </div>
    </div>
  )
}

export default Contact
