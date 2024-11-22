import React, { useEffect, useState } from 'react';
import hLogo from '../assets/hLogo.png';
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from 'react-icons/ci';
import { BiSolidDownArrow } from 'react-icons/bi';
import '../styles/header.css';
import api from '../api';

const Header = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await api.get('/api/auth/user', { headers: { 'x-auth-token': token } });
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="header">
                <div className="header-logo">
                    <h2>
                        Welcome Back 👋
                    </h2>
                    <h3>
                        {user && user.restaurant ? (
                            <h3>{user.restaurant.restaurant_name}</h3>
                        ) : (
                            <p>Loading restaurant</p>
                        )}
                    </h3>
                </div>
                <div className="col-9">
                    <div className="top-nav">
                        <form className="top-nav-search">
                            <div className="searchinputs">
                                <input type="text" placeholder="Search Here your Delicious Food.." />
                                <div className="serach-addon">
                                    <span>
                                        <CiSearch />
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div className="notification">
                            <div className="noti-around">
                                <IoIosNotifications size={24} />
                                <span className="notification-badge"></span>
                            </div>
                        </div>
                        <div className="profile">
                            <div className="profile-around">
                                <div className="profile-image">
                                    <a href="/profile" style={{
                                        textDecoration: "none",
                                        color: "white"
                                    }}>
                                        <img src={user.avatar} alt="avtar" />
                                        <h2 style={{
                                            fontSize: "16px",
                                            marginTop: "-28px",
                                            marginLeft: "50px",
                                        }}>{user.firstname}  {user.lastname}</h2>
                                        <div className="profile-arrow">
                                            <BiSolidDownArrow />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;