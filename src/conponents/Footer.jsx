import React from 'react'
import '../styles/Footer.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer>
        
            <div>
                <h1>Technovus.</h1>
                <input type="text" placeholder='Feedback' />
            </div>

            <div>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                </ul>
            </div>

            <div>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                </ul>
            </div>

            <div>
                <h3>Contacts</h3>
                <ul>
                    <li>Phone Number (+234)  </li>
                    <li>Social media handle</li>
                </ul>
               <div className='nine'>
               <a href=""  className='ninth'><FaFacebook /></a>
                <a href=""  className='ninth'><AiFillInstagram /></a>
                <a href=""  className='ninth'><FaXTwitter /></a>
                <a href=""  className='ninth'><FaLinkedinIn  /></a>
               </div>
            </div>
        
      </footer>
    </>
  )
}

export default Footer
