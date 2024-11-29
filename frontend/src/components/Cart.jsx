import React, { useState } from "react";
import "../styles/cart.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Frame from '../assets/Frame.png';
import Cashpayment from '../assets/Cashpayment.png';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Beef Burger", price: 500, quantity: 2 },
        { id: 2, name: "Chicken Burger", price: 400, quantity: 1 },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState("Online");

    const handleIncrement = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    const calculateTax = (percentage) => {
        return (calculateTotal() * percentage).toFixed(2);
    };

    const calculatePayable = () => {
        return (calculateTotal() + parseFloat(calculateTax(0.05))).toFixed(2);
    };

    const handleParcelOrder = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const selectPaymentOption = (option) => {
        setSelectedPayment(option);
    };

    return (
        <div className="cart-container">
            <div className="container py-3">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                        <MdOutlineKeyboardArrowLeft style={{ width: "20px", height: "20px" }} />
                        <span className="cart-title">Cart</span>
                    </div>
                    <button className="btn add-items-btn">+ Add Items</button>
                </div>

                {/* Cart Items */}
                {cartItems.map((item) => (
                    <div className="cart-item mb-3" key={item.id}>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/2219/e5be/2ad9d683186e027903e0156fdf01e726?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yugwqo5fKrfewW5C9noLhHOo7nXXX83aizfm2~r9I7PORYNKMofkCQy933VPrCa~OUrRQu090jbwbSS~~2ZlBcMR420UGvPtJ4B0CYWI~Y2MlfT943Xu03aSNWXOFTcSSgdtDaopPMzh0ifYTmzWZUz4OajsVzIXIHjxp3X51CkG145XAmzO8O6iLXqczEQCxbkqhhaHCuCGDrluDdjo2SGSP5UgBqE0o7b0WwHC3E0rGUuZ9i4IAPZ2bykhNGbO3kaQeyFxVgO3MTycuOZdIOWly-BLa9cj3OCx729ERYtVaPwfATcbQQiGupgg772yHtvD14kbP3rYt2FWUNW6EA__"
                                alt={item.name}
                                className="cart-item-img me-3 mt-3"
                            />
                            <div className="cart-item-details">
                                <p className="item-name mb-1">{item.name}</p>
                                <div className="d-flex align-items-center">
                                    <button
                                        className="btn qty-btn"
                                        onClick={() => handleDecrement(item.id)}
                                    >
                                        -
                                    </button>
                                    <span className="qty-value mx-2">{item.quantity}</span>
                                    <button
                                        className="btn qty-btn"
                                        onClick={() => handleIncrement(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="ms-auto d-flex flex-column align-items-end">
                                <p className="item-price">₹{item.quantity * item.price}</p>
                                <button className="btn delete-btn">🗑</button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Cooking Request */}
                <textarea
                    className="form-control mb-3 cooking-request"
                    placeholder="Add Cooking Request (Optional)"
                ></textarea>

                {/* Summary */}
                <div className="summary mb-3">
                    <div className="d-flex justify-content-between">
                        <p>Total ({cartItems.length} Items)</p>
                        <p>₹{calculateTotal()}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>CGST 2.5%</p>
                        <p>₹{calculateTax(0.025)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>SGST 2.5%</p>
                        <p>₹{calculateTax(0.025)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="payable-label">Payable Amount</p>
                        <p className="payable-value">₹{calculatePayable()}</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="d-flex justify-content-between align-items-center">
                    <p className="item-added">
                        {cartItems.reduce((total, item) => total + item.quantity, 0)} Item(s) Added
                    </p>
                    <button
                        className="btn place-order-btn"
                        onClick={handleParcelOrder}
                    >
                        Parcel Order
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <button className="close-icon" onClick={closeModal}>×</button>
                        <h3 className="modal-title">Select Payment</h3>
                        <div className="modal-options">
                            <div
                                className={`payment-option ${
                                    selectedPayment === "Online" ? "active" : ""
                                }`}
                                onClick={() => selectPaymentOption("Online")}
                            >
                                <img src={Frame} alt="Online" className="Frame mb-3" />
                                <p className="payment-label">Online</p>
                            </div>
                            <div
                                className={`payment-option ${
                                    selectedPayment === "Cash" ? "active" : ""
                                }`}
                                onClick={() => selectPaymentOption("Cash")}
                            >
                                <img src={Cashpayment} alt="Cash" className="payment-icon" />
                                <p className="payment-label">Cash</p>
                            </div>
                        </div>
                        <button className="pay-button">Pay</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
