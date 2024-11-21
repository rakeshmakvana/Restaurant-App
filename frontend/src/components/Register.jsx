import React, { useEffect, useState } from 'react';
import logo3 from '../assets/logo3.png';
import '../styles/register.css';
import api from '../api';
import { useNavigate } from 'react-router-dom';

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
    const [restaurants, setRestaurants] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');
    const [newRestaurant, setNewRestaurant] = useState({
        restaurant_name: '',
        restaurant_address: '',
        country: '',
        state: '',
        city: '',
        zip_code: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/api/restaurants/restaurants')
            .then(response => setRestaurants(response.data))
            .catch(error => console.error('Error fetching restaurants:', error));
    }, []);

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
        api.post('/api/restaurants/create', newRestaurant)
            .then(response => {
                setRestaurants([...restaurants, response.data]);
                setFormData({ ...formData, restaurant: response.data._id });
                setNewRestaurant({
                    restaurant_name: '',
                    restaurant_address: '',
                    country: '',
                    state: '',
                    city: '',
                    zip_code: '',
                });
                setShowModal(false);
            })
            .catch(error => console.error('Error adding restaurant:', error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        api.post('/api/auth/register', formData)
            .then(response => {
                window.alert('Regester Successfully')
                navigate('/login')
            })
            .catch(error => console.error('Registerestion failed.',));
    };

    return (
        <div className="registration-wrapper">
            <div className="registration-container">
                <h2>Registration</h2>
                {error && <p className="text-danger">{error}</p>}
                <form onSubmit={handleSubmit} className="registration-form">

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

                    <div className="input-group">
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleChange}
                            className="form-control half-width"
                            required
                        />

                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleChange}
                            className="form-control half-width"
                            required
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            className="form-control half-width"
                            required
                        />

                    </div>

                    <div className="mb-1">
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
                            {(Array.isArray(restaurants) ? restaurants : []).map((restaurant, index) => (
                                <option key={index} value={restaurant._id}>{restaurant.restaurant_name}</option>
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
                                I agree to all the <a href="">T&C</a> and <a href="">Privacy Policies</a>
                            </span>
                        </label>
                    </div>
                    <button type="submit" className="btn register-button w-100 bg-warning text-dark">
                        Register
                    </button>
                </form>
                <div className="login-link">
                    <p className="text-center mt-3">
                        Already have an account? <a href="/login" className='text-warning text-decoration-none'>Login</a>
                    </p>
                </div>
            </div>
            {showModal && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-content" style={{ backgroundColor: '#2A2A38' }}>
                        <div className="modal-header">
                            <h5 className="modal-title text-light">Add New Restaurant</h5>
                            <button type="button" className="close text-light" onClick={() => setShowModal(false)}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='d-flex flex-wrap'>
                                <input
                                    type="text"
                                    name="restaurant_name"
                                    value={newRestaurant.restaurant_name}
                                    onChange={(e) => setNewRestaurant({ ...newRestaurant, restaurant_name: e.target.value })}
                                    placeholder="Restaurant Name"
                                    className="form-control"
                                    required
                                />
                                <input
                                    type="text"
                                    name="restaurant_address"
                                    value={newRestaurant.restaurant_address}
                                    onChange={(e) => setNewRestaurant({ ...newRestaurant, restaurant_address: e.target.value })}
                                    placeholder="Restaurant Address"
                                    className="form-control mt-2"
                                    required
                                />
                                <input
                                    type="text"
                                    name="country"
                                    value={newRestaurant.country}
                                    onChange={(e) => setNewRestaurant({ ...newRestaurant, country: e.target.value })}
                                    placeholder="Country"
                                    className="form-control mt-2 w-50"
                                    required
                                />
                                <input
                                    type="text"
                                    name="state"
                                    value={newRestaurant.state}
                                    onChange={(e) => setNewRestaurant({ ...newRestaurant, state: e.target.value })}
                                    placeholder="State"
                                    className="form-control mt-2 w-50"
                                    required
                                />
                                <input
                                    type="text"
                                    name="city"
                                    value={newRestaurant.city}
                                    onChange={(e) => setNewRestaurant({ ...newRestaurant, city: e.target.value })}
                                    placeholder="City"
                                    className="form-control mt-2 w-50"
                                    required
                                />
                                <input
                                    type="number"
                                    name="zip_code"
                                    value={newRestaurant.zip_code}
                                    onChange={(e) => setNewRestaurant({ ...newRestaurant, zip_code: e.target.value })}
                                    placeholder="ZIP Code"
                                    className="form-control mt-2 w-50"
                                    required
                                />
                            </form>
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

            <div className="register-info d-none d-lg-block">
                <div className="logo-container">
                    <img src={logo3} alt="Logo3" />
                </div>
                <p className='info-text'>Aenean blandit id nisl et pretium. Sed efficitur <span className='highlight'>lectus ipsum, ac dapibus turpis auctor.</span></p>
            </div>
        </div>
    );
};

export default Register;