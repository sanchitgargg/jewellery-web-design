import React from 'react'
import './Us.css'
import layer15 from '../../assets/layer 15.png'
import purity from '../../assets/purity.png'
import craftmanship from '../../assets/craftmanship.png'
import quality from '../../assets/quality.png'
import value from '../../assets/value.png'
import pen from '../../assets/pen.png'
import pen_next from '../../assets/pen-next.png'


const Us = () => {
  return (
    <div className='us'>
        <div className="section-1-of-us">
            <h1>Crafting Dreams <br/> Since 1950</h1>
            <div className="image-of-section-1">
            <img src={layer15} alt="" />
            </div>
        </div>
        <div className="pen-image">
        <img src={pen} alt="" />
        <img src={pen_next} alt="" />
        </div>
        <div className="features">
            <div className="feature-box">
                <img src={purity} alt="" />
                <h3>Purity</h3>
                <hr />
                <p>Experience unmatched purity in every piece of jewelry, crafted with the finest materials to shine with timeless elegance and quality.</p>
            </div>
            <div className="feature-box">
            <img src={craftmanship} alt="" />
                <h3>Craftmanship</h3>
                <hr />
                <p>Masterfully crafted with precision and care, our jewelry showcases exceptional craftsmanship that elevates every design to a work of art.</p>
            </div>
            <div className="feature-box">
            <img src={quality} alt="" />
                <h3>Quality</h3>
                <hr />
                <p>Uncompromising quality in every piece, ensuring durability, brilliance, and timeless beauty that lasts for generations to come.</p>
            </div>
            <div className="feature-box">
            <img src={value} alt="" />
                <h3>Value</h3>
                <hr />
                <p>Exceptional value in every piece, offering unmatched quality and design at a price that makes luxury accessible to all.</p>
            </div>
        </div>
    </div>
  )
}

export default Us