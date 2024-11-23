import React, { useState } from 'react';
import './Header.css';
import { FiMenu } from 'react-icons/fi';
import hLogo from '../../assets/hLogo.png';
import c1 from '../../assets/c1.jpeg';
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from 'react-icons/ci';
import { BiSolidDownArrow } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="header">
            <div className="header-logo">
                {/* <img src={hLogo} alt="h-logo" /> */}
                <p className='header-home-icon'>
                    <FontAwesomeIcon icon={faHome} className="me-3" style={{ color: '#FFFFFF' }} />
                    Request For Payment</p>
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
                                <a href="#" style={{
                                    textDecoration: "none",
                                    color: "white"
                                }}>
                                    <img src={c1} alt="c1" />
                                    <h2 style={{
                                        fontSize: "16px",
                                        marginTop: "-28px",
                                        marginLeft: "50px",
                                    }}>Mussabbir Hossain</h2>
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
    );
};

export default Header;
