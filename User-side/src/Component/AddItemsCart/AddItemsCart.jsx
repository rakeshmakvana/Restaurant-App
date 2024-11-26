import React from 'react'
import "./AddItemsCart.css";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import Character1 from '../../assets/Character1.jpg';


function AddItemsCart() {
    return (
        <>
            <div className="app-container d-flex flex-column">
                {/* Header */}
                <div className="header-container d-flex align-items-center">
                    <MdOutlineKeyboardArrowLeft className="text-light" />
                    <span className="header-title ms-auto">Cart</span>
                </div>

                {/* Main Content */}
                <div className="content-container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
                    {/* Illustration */}
                    <div className="illustration">
                        {/* Use an image tag or a div to mimic the provided image */}
                        <img
                            src={Character1}
                            alt="Illustration"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-container text-center mt-3">
                        <p>If you want to order another item, you <br/> can order this button.</p>
                        <p>If you want to order another item, you <br/> can order this button.</p>
                    </div>

                    {/* Add More Items Button */}
                    <button className="btn btn-primary add-items-button mt-3">
                        Add More Items
                    </button>
                </div>

                {/* Footer */}
                <div className="footer-container d-flex justify-content-between align-items-center px-3">
                    <span>5 Item Added <p>₹ 2,050</p></span>
                    <button className="btn btn-warning pay-now-button">Pay Now</button>
                </div>
            </div>
        </>
    )
}

export default AddItemsCart
