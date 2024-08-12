import React from 'react'
import "./Offers.css"
import Exclusive_img from "../Assest/exclusive_image.png"
const Offers = () => {
  return (
    <div className='Offers'>
<div className='Offer-left'>
<h1>Exclusive</h1>
<h1> offers for you</h1>
<p>ONLY ON BEST PRODUCT SELLERS</p>
<button>Check Now</button>
</div>
<div className='Offer-right'>
  <img src= {Exclusive_img}alt="" />
</div>

    </div>
  )
}

export default Offers