import React from 'react';
import '../styles/payment.css';

function Payment() {
    return (
        <div className="payment-container">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-12">
                        <div className="payment-card p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <span className="back-arrow">&lt;</span>
                                <h5 className="m-0">Payment Method</h5>
                            </div>
                            <div className="payment-option mb-3">
                                <label htmlFor="masterCard" className="d-flex align-items-center">
                                    <img src="https://img.icons8.com/color/48/mastercard.png" alt="MasterCard" width="24" height="24" />
                                    <span className="ms-2">Master Card</span>
                                    <input type="radio" id="masterCard" name="paymentMethod" checked className="ms-auto" />
                                </label>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="cardHolder" className="form-label">Card Holder Name*</label>
                                    <input type="text" className="form-control" id="cardHolder" placeholder="Marcus George" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cardNumber" className="form-label">Card Number*</label>
                                    <input type="text" className="form-control" id="cardNumber" placeholder="1234 4567 8745 5212" />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="expiryDate" className="form-label">Expiry Date*</label>
                                        <input type="text" className="form-control" id="expiryDate" placeholder="11/2" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="cvv" className="form-label">CVV*</label>
                                        <input type="text" className="form-control" id="cvv" placeholder="512" />
                                    </div>
                                </div>
                            </form>
                            <div className="payment-option mt-3">
                                <label htmlFor="visaCard" className="d-flex align-items-center">
                                    <img src="https://img.icons8.com/color/48/visa.png" alt="Visa Card" width="24" height="24" />
                                    <span className="ms-2">Visa Card</span>
                                    <input type="radio" id="visaCard" name="paymentMethod" className="ms-auto" />
                                </label>
                            </div>
                            <div className="payment-option mt-3">
                                <label htmlFor="upi" className="d-flex align-items-center">
                                    <img src="https://img.freepik.com/free-vector/virtual-indian-erupee-symbol-tech-background-digital-payment_1017-45224.jpg?semt=ais_hybrid" alt="UPI" width="24" height="24" />
                                    <span className="ms-2">UPI</span>
                                    <input type="radio" id="upi" name="paymentMethod" className="ms-auto" />
                                </label>
                            </div>
                            <div className="mt-4">
                                <div className="d-flex justify-content-between">
                                    <span className="payable-text">Payable Amount</span>
                                    <span className="payable-amount">₹ 2,050</span>
                                </div>
                                <button className="btn btn-primary w-100 mt-3">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
