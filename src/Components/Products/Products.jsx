import React from 'react'
import './Products.css'
import frame from '../../assets/frame.png'

const Products = () => {
  return (
    <div className='products'>
        <h1>Shop By Category</h1>
        <div className="images-container-frame">
            <div className="frame1">
            {/* <img src={frame} alt="" /> */}
            </div>
            <div className="frame2">
                <h3>Rings</h3>
                <p>A tribute to the glorious Indian tradition of crafting jewelry finds expression in this extraordinary collection.</p>
                <p>Explore Our Category &rarr;</p>
            </div>
            <div className="frame2">
                <h3>Bracelets</h3>
                <p>A tribute to the glorious Indian tradition of crafting jewelry finds expression in this extraordinary collection.</p>
                <p>Explore Our Category &rarr;</p>
            </div>
            <div className="frame2">
                <h3>Necklaces</h3>
                <p>A tribute to the glorious Indian tradition of crafting jewelry finds expression in this extraordinary collection.</p>
                <p>Explore Our Category &rarr;</p>
            </div>
        </div>
    </div>
  )
}

export default Products