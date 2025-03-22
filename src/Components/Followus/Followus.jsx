import React from 'react'
import './Followus.css'
import layer_24 from '../../assets/layer 24.png'
import layer_25 from '../../assets/layer 25.png'
import layer_27 from '../../assets/layer 27.png'
import layer_28 from '../../assets/layer 28.png'
import insta_icon from '../../assets/insta-icon.png'

const Followus = () => {
  return (
    <div className='followus'>
        <h1>Follow Us For Daily Sparkle</h1>
        <div className="img-grid-followus">
            <img src={layer_28} alt="" />
            <img src={layer_27} alt="" />
            <img src={layer_25} alt=""/>

            <img src={layer_24} alt="" />
        </div>
    </div>
  )
}

export default Followus
