import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../assets/logo.png';
import { LuLayoutDashboard } from 'react-icons/lu';
import { GiCardboardBoxClosed } from 'react-icons/gi';
import { MdOutlineRestaurantMenu, MdPayment } from 'react-icons/md';
import { IoQrCodeSharp } from 'react-icons/io5';
import { BiSolidDownArrow } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
    const [isManageOrderOpen, setIsManageOrderOpen] = useState(false);
    const [isPaymentHistoryOpen, setIsPaymentHistoryOpen] = useState(false);

    const toggleManageOrder = () => setIsManageOrderOpen(!isManageOrderOpen);
    const togglePaymentHistory = () => setIsPaymentHistoryOpen(!isPaymentHistoryOpen);

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <ul className="sidebar-menu">
                <li className="sidebar-item">
                    <LuLayoutDashboard size={19} className="sidebar-icon" />
                    <a href="#home" className="sidebar-link">Dashboard</a>
                </li>
                <li className="sidebar-item" onClick={toggleManageOrder}>
                    <GiCardboardBoxClosed size={19} className="sidebar-icon" />
                    <a href="#home" className="sidebar-link">Manage Order</a>
                    <BiSolidDownArrow size={13} className={`dropdown-arrow ${isManageOrderOpen ? 'open' : ''}`} />
                </li>
                {isManageOrderOpen && (
                    <ul className="dropdown-menu">
                        <li><a href="#order1" className="dropdown-link">Parcel Order</a></li>
                        <li><a href="#order2" className="dropdown-link">Onsite Order</a></li>
                    </ul>
                )}
                <li className="sidebar-item">
                    <MdOutlineRestaurantMenu size={19} className="sidebar-icon" />
                    <a href="#home" className="sidebar-link">Merge Menu</a>
                </li>
                <li className="sidebar-item" onClick={togglePaymentHistory}>
                    <MdPayment size={19} className="sidebar-icon" />
                    <a href="#home" className="sidebar-link">Payment History</a>
                    <BiSolidDownArrow size={13} className={`dropdown-arrow ${isPaymentHistoryOpen ? 'open' : ''}`} />
                </li>
                {isPaymentHistoryOpen && (
                    <ul className="dropdown-menu">
                        <li><a href="#payment1" className="dropdown-link">Parcel Order</a></li>
                        <li><a href="#payment2" className="dropdown-link">Onsite Order</a></li>
                    </ul>
                )}
                <li className="sidebar-item">
                    <IoQrCodeSharp size={19} className="sidebar-icon" />
                    <a href="#home" className="sidebar-link">QR Codes</a>
                </li>
            </ul>
            <div className="logout-container">
                <div className="logout-item">
                    <FiLogOut size={19} className="logout-icon" />
                    <a href="#logout" className="logout-link">Logout</a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
