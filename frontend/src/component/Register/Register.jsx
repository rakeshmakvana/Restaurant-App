import React, { useState } from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo3 from '../../assets/logo3.png';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        state: '',
        city: '',
        restaurant: '',
        password: '',
        confirmPassword: '',
        agree: false,
    });

    const [restaurants, setRestaurants] = useState([
        'McDonald\'s', 'Starbucks', 'KFC', 'Domino\'s Pizza', 'Pizza Hut', 'Burger King', 'Subway', 'Chipotle', 'Taco Bell', 'Wendy\'s'
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newRestaurant, setNewRestaurant] = useState('');

    const countries = ['USA', 'Canada', 'India'];
    const states = ['California', 'New York', 'Texas'];
    const cities = ['Los Angeles', 'New York City', 'San Francisco'];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleRestaurantChange = (e) => {
        setFormData({
            ...formData,
            restaurant: e.target.value,
        });
    };

    const handleAddRestaurant = () => {
        if (newRestaurant) {
            setRestaurants([...restaurants, newRestaurant]);
            setFormData({ ...formData, restaurant: newRestaurant });
            setNewRestaurant('');
            setShowModal(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="registration-wrapper">
            <div className="registration-container">
                <h2>Registration</h2>
                <form onSubmit={handleSubmit} className="registration-form">

                    {/* Name and Email Fields */}
                    <div className="input-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="form-control half-width"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="form-control half-width"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control half-width"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control half-width"
                            required
                        />
                    </div>

                    {/* Location Fields */}
                    <div className="input-group">
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="form-control third-width"
                            required
                            style={{
                                color: '#fff',
                                backgroundColor: '#2D303E',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #2A2A38',
                                marginBottom: '-10px',
                                appearance: 'none',
                                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 8 8%22%3E%3Cpath fill=%22%23FFF%22 d=%22M4 5L1 2h6L4 5z%22/%3E%3C/svg%3E")',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 10px center',
                                backgroundSize: '10px 5px',
                            }}
                        >
                            <option value="" disabled>Select a Country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>

                        <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="form-control third-width"
                            required
                            style={{
                                color: '#fff',
                                backgroundColor: '#2D303E',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #2A2A38',
                                marginBottom: '-10px',
                                appearance: 'none',
                                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 8 8%22%3E%3Cpath fill=%22%23FFF%22 d=%22M4 5L1 2h6L4 5z%22/%3E%3C/svg%3E")',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 10px center',
                                backgroundSize: '10px 5px',
                            }}
                        >
                            <option value="" disabled>Select a State</option>
                            {states.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>

                        <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="form-control third-width"
                            required
                            style={{
                                color: '#fff',
                                backgroundColor: '#2D303E',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #2A2A38',
                                marginBottom: '-10px',
                                appearance: 'none',
                                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 8 8%22%3E%3Cpath fill=%22%23FFF%22 d=%22M4 5L1 2h6L4 5z%22/%3E%3C/svg%3E")',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 10px center',
                                backgroundSize: '10px 5px',
                            }}
                        >
                            <option value="" disabled>Select a City</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>

                    </div>

                    <div className="mb-3">
                        <select
                            name="restaurant"
                            value={formData.restaurant}
                            onChange={handleRestaurantChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                color: '#fff',
                                backgroundColor: '#2D303E',
                                border: '1px solid #2A2A38',
                                marginBottom: '-10px',
                                appearance: 'none',
                                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 8 8%22%3E%3Cpath fill=%22%23FFF%22 d=%22M4 5L1 2h6L4 5z%22/%3E%3C/svg%3E")',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 10px center',
                                backgroundSize: '10px 5px',
                            }}
                        >
                            <option value="" disabled>Select a Restaurant</option>
                            {restaurants.map((restaurant, index) => (
                                <option key={index} value={restaurant}>{restaurant}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="button"
                        className="btn btn-secondary w-100 mt-3"
                        onClick={() => setShowModal(true)}
                    >
                        Add Restaurant
                    </button>

                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-control full-width"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="form-control full-width"
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input
                                type="checkbox"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleChange}
                                style={{
                                    width: '16px',
                                    height: '16px',
                                    margin: '0',
                                }}
                            />
                            <span>
                                I agree to all the <a href="#">T&C</a> and <a href="#">Privacy Policies</a>
                            </span>
                        </label>
                    </div>
                    <button type="submit" className="btn register-button w-100 bg-warning">
                        Register
                    </button>
                </form>
                <div className="login-link">
                    <p className="text-center mt-3">
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                </div>
            </div>
            {showModal && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Restaurant</h5>
                            <button type="button" className="close" onClick={() => setShowModal(false)}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                value={newRestaurant}
                                onChange={(e) => setNewRestaurant(e.target.value)}
                                placeholder="Enter restaurant name"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleAddRestaurant}
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="login-info">
                <div className="logo-container">
                    <img src={logo3} alt="Logo3" />
                </div>
                <p className="info-text">
                    We are <span className="highlight">always</span> here to serve you is simply dummy text of the printing and typesetting.
                </p>
            </div>
        </div>
    );
};

export default Register;
