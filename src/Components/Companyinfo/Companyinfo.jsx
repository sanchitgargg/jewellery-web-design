import React from 'react'
import './Companyinfo.css'
import layer_18 from '../../assets/layer 18.png'
import layer_19 from '../../assets/layer 19.png'
import layer_20 from '../../assets/layer 20.png'


const Companyinfo = () => {
  return (
    <div className='company-info'>
        <h1>Only at Company</h1>
        <div className="section-1-of-company-info">
            <div className="content-section-1">
            <h2>VISIT A SHOWROOM</h2>
            <p>Meet our personal jewelers, explore bestselling styles, pick up an online order, arrange to preview something from our online collection and so much more.</p>
            <p>Explore Our Locations  <span> &rarr; </span></p>
            </div>
            <div className="image-section-1">
                <img src={layer_18} alt="" />
            </div>
        </div>

        <div className="section-2-of-company-info">
            <div className="image-section-2">
                <img src={layer_19} alt="" />
            </div>
            <div className="content-section-1 content-section-2">
                <h2>Schedule an appointment</h2>
                <p>Book a fun and interactive appointment with a jewelry expert and get up-close view of diamond and jewelry options from the comfort of your own home.</p>
                <p>Schedule Now <span> &rarr; </span></p>
            </div>
            <div className="image-section-2-1">
                <img src={layer_20} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Companyinfo