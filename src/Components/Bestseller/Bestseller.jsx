import React, { useState } from 'react';
import './Bestseller.css';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';

const Bestseller = () => {
    const [selectedColor1, setSelectedColor1] = useState("#D9BB91");
    const [selectedColor2, setSelectedColor2] = useState("#D9BB91");
    const [selectedColor3, setSelectedColor3] = useState("#D9BB91");
    const [selectedColor4, setSelectedColor4] = useState("#D9BB91");

    return (
        <div className='bestseller'>
            <div className="first-container">
                <div className="main-section">
                    <h1>Discover Our <span>Best Seller</span></h1>
                    <p>Discover a world of style, elegance, and innovation with our carefully curated collection.</p>
                </div>
                <div className="leftrightbtn">
                    <button className='prev-btn'></button>
                    <button className='next-btn'></button>
                </div>
            </div>

            <div className="second-container">
                {/* Product 1 */}
                <div className="product">
                    <img src={product1} alt="Flower Band Ring" />
                    <div className="product-details">
                        <p>Flower Band Ring</p>
                        <p>BHD 2032</p>
                    </div>
                    <div className="color-options">
                        <div
                            className={`color-circle ${selectedColor1 === "#D9BB91" ? "selected" : ""}`}
                            style={{ backgroundColor: "#D9BB91" }}
                            onClick={() => setSelectedColor1("#D9BB91")}
                        ></div>
                        <div
                            className={`color-circle ${selectedColor1 === "#C4C4C4" ? "selected" : ""}`}
                            style={{ backgroundColor: "#C4C4C4" }}
                            onClick={() => setSelectedColor1("#C4C4C4")}
                        ></div>
                        <div
                            className={`color-circle ${selectedColor1 === "#A67C52" ? "selected" : ""}`}
                            style={{ backgroundColor: "#A67C52" }}
                            onClick={() => setSelectedColor1("#A67C52")}
                        ></div>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="product">
                    <img src={product2} alt="Serra Bar Bracelet" />
                    <div className="product-details">
                        <p>Serra Bar Bracelet</p>
                        <p>BHD 1932</p>
                    </div>
                    <div className="color-options">
                        <div
                            className={`color-circle ${selectedColor2 === "#E3CDA4" ? "selected" : ""}`}
                            style={{ backgroundColor: "#E3CDA4" }}
                            onClick={() => setSelectedColor2("#E3CDA4")}
                        ></div>
                        <div
                            className={`color-circle ${selectedColor2 === "#B8B8B8" ? "selected" : ""}`}
                            style={{ backgroundColor: "#B8B8B8" }}
                            onClick={() => setSelectedColor2("#B8B8B8")}
                        ></div>
                        <div
                            className={`color-circle ${selectedColor2 === "#8B5E3B" ? "selected" : ""}`}
                            style={{ backgroundColor: "#8B5E3B" }}
                            onClick={() => setSelectedColor2("#8B5E3B")}
                        ></div>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="product">
                    <img src={product3} alt="Gold Necklace Chain" />
                    <div className="product-details">
                        <p>Gold Necklace Chain</p>
                        <p>BHD 1832</p>
                    </div>
                    <div className="color-options">
                        <div
                            className={`color-circle ${selectedColor3 === "#FFD700" ? "selected" : ""}`}
                            style={{ backgroundColor: "#FFD700" }}
                            onClick={() => setSelectedColor3("#FFD700")}
                        ></div>
                        <div
                            className={`color-circle ${selectedColor3 === "#D4AF37" ? "selected" : ""}`}
                            style={{ backgroundColor: "#D4AF37" }}
                            onClick={() => setSelectedColor3("#D4AF37")}
                        ></div>
                        <div
                            className={`color-circle ${selectedColor3 === "#B8860B" ? "selected" : ""}`}
                            style={{ backgroundColor: "#B8860B" }}
                            onClick={() => setSelectedColor3("#B8860B")}
                        ></div>
                    </div>
                </div>

                {/* Product 4 */}
                <div className="product">
                    <img src={product4} alt="Serra Bar Bracelet" />
                    <div className="product-details">
                        <p>Serra Bar Bracelet</p>
                        <p>BHD 2032</p>
                    </div>
                    <div className="color-options">
                        <div
                            className={`color-circle ${selectedColor4 === "#E3CDA4" ? "selected" : ""}`}
                            style={{ backgroundColor: "#E3CDA4" }}
                            onClick={() => setSelectedColor4("#E3CDA4")}
                        ></div>
                        <div
                            className={`color-circle ${selectedColor4 === "#B8B8B8" ? "selected" : ""}`}
                            style={{ backgroundColor: "#B8B8B8" }}
                            onClick={() => setSelectedColor4("#B8B8B8")}
                        ></div>
                        <div
                            className={`color-circle ${selectedColor4 === "#8B5E3B" ? "selected" : ""}`}
                            style={{ backgroundColor: "#8B5E3B" }}
                            onClick={() => setSelectedColor4("#8B5E3B")}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bestseller;
