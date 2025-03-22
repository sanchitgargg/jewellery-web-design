import React from 'react'
import './Rate.css'
import rate1 from '../../assets/rate1.png'
import ring from '../../assets/ring.png'

const Rate = () => {
  return (
    <div className='rate'>
        <div className="img-container-left">
            <div className="background-box"></div>
            <img src={rate1} alt="" />
        </div>
        <div className="container-right">
               <div className="headlines">
               <h1>Gold Rate</h1>
               <p>Pay Only for the Real Gold Rate - <br/> No Overcharges, No Underpayments!</p>
               </div>
            <div className="box-section">
                <div className="box-1">
                    <div className="inner-box1">
                    <p>Purity</p>
                    <h3>21K</h3>
                    </div>
                    <div className="box-1-right">
                    <p>Price per gram</p>
                    <p><span>BD 31.400 </span>- BAHRAIN</p>
                    <p><span>BD 31.650 </span>- OMAN</p>
                    </div>

                </div>
                <div className="box-2">
                <div className="inner-box1">
                    <p>Purity</p>
                    <h3>21K</h3>
                    </div>
                    <div className="box-1-right">
                    <p>Price per gram</p>
                    <p><span>BD 31.400 </span>- BAHRAIN</p>
                    <p><span>BD 31.650 </span>- OMAN</p>
                    </div>
                </div>

                </div>

                <div className="instructions">
                <p>Last updated on 15/02/25 04:012am (GMT+3) </p>
                <p>* Gold prices are subject to market conditions, Price vary by city.</p>
                </div>

            



        </div>
        <img src={ring} id='ring-img' alt="" />

    </div>
  )
}

export default Rate