import React from 'react'
import './Testimonials.css'
import testimonial from '../../assets/testimonial.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <h1>Customers Love Us</h1>
        <div className="testimonial-main-section">
        <div className="image-container-testimonials">
            <div className="background-color"></div>
            <div className="image-testimonial">
                <img src={testimonial} alt="" />
            </div>
        </div>
        <div className="content-container-testimonials">
                <h3 class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                </h3>
            <h1>"Stunningly Beautiful <br/> And aesthetic designs"</h1>
            <p>I am absolutely in love with the exquisite craftsmanship and elegant designs! Each piece is a true masterpiece, radiating beauty and sophistication. The attention to detail is remarkable. Highly recommended for jewelry lovers!</p>
            <div className="leftrightbtn testi-btn">
                <button className='prev-btn'></button>
                <button className='next-btn'></button>
        </div>
            </div>
        </div>
        
    </div>
  )
}

export default Testimonials