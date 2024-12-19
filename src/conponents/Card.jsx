import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import '../styles/Card.css'

const Card = () => {
  return (
    <div>
      <div className='card'>
        <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/1219972/1.jpg?7983" alt="" />
        <p className='first'>Products Name</p>
        <p className='second'>$10000</p>
        <p className='third'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, iusto.</p>

        <div className='icon-container'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>

        <button>Add to cart <FaShoppingCart /></button>
      </div>
    </div>
  )
}

export default Card
