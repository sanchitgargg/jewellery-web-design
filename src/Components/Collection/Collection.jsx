import React from 'react'
import './Collection.css'
import cognacbg from '../../assets/cognacbg.png'
import cognac from '../../assets/cognac.png'
import collection1 from '../../assets/collection1.png'
import collection2 from '../../assets/collection2.png'


const Collection = () => {
  return (
    <div className='collection'>
        <h1>Explore Collection</h1>
        <div className="img-section">
        {/* <img src={cognacbg} alt="" /> */}
        {/* <img src={cognac} alt="" /> */}
        </div>
        <div className="main-content-section">
            <div className="main-section-1">
                <h1>Tamanna</h1>
                <p>Tamanna means Desire and true to its name the Tamanna collection is designed to stir a desire in every woman's heart.</p>
                <p>Explore Our Collection  &rarr;</p>
            </div>
            <div className="main-section-2">
                <img src={collection1} alt="" />
            </div>
            <div className="main-section-3">
                <img src={collection2} alt="" />
            </div>
            <div className="main-section-4">
            <h1>Tanvi</h1>
            <p>A tribute to the glorious Indian tradition of crafting jewelry finds expression in this extraordinary collection.</p>
            <button>Explore Our Collection &rarr;</button>
            </div>

        </div>
    </div>
  )
}

export default Collection