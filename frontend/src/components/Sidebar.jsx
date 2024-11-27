import React, { useState } from 'react';
import logo from '../assets/logo3.png';
import { LuLayoutDashboard } from 'react-icons/lu';
import { GiCardboardBoxClosed } from 'react-icons/gi';
import { MdOutlineRestaurantMenu, MdPayment } from 'react-icons/md';
import { IoQrCodeSharp } from 'react-icons/io5';
import { BiSolidDownArrow } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { LuAlignJustify } from "react-icons/lu";
import '../styles/sidebar.css'
import { Button, Offcanvas } from 'react-bootstrap';

const Sidebar = () => {
    const [isManageOrderOpen, setIsManageOrderOpen] = useState(false);
    const [isPaymentHistoryOpen, setIsPaymentHistoryOpen] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleManageOrder = () => setIsManageOrderOpen(!isManageOrderOpen);
    const togglePaymentHistory = () => setIsPaymentHistoryOpen(!isPaymentHistoryOpen);

    return (
        <>
            <Button variant="dark" onClick={handleShow} className='off-btn'>
                <LuAlignJustify />
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
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
                        <a href="#" className="sidebar-link">Payment History</a>
                        <BiSolidDownArrow size={13} className={`dropdown-arrow ${isPaymentHistoryOpen ? 'open' : ''}`} />
                    </li>
                    {isPaymentHistoryOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#" className="dropdown-link">Parcel Order</a></li>
                            <li><a href="#" className="dropdown-link">Onsite Order</a></li>
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
            </Offcanvas>
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <ul className="sidebar-menu">
                    <li className="sidebar-item">
                        <LuLayoutDashboard size={19} className="sidebar-icon" />
                        <a href="/" className="sidebar-link">Dashboard</a>
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
                        <a href="/menu" className="sidebar-link">Merge Menu</a>
                    </li>
                    <li className="sidebar-item" onClick={togglePaymentHistory}>
                        <MdPayment size={19} className="sidebar-icon" />
                        <a href="#home" className="sidebar-link">Payment History</a>
                        <BiSolidDownArrow size={13} className={`dropdown-arrow ${isPaymentHistoryOpen ? 'open' : ''}`} />
                    </li>
                    {isPaymentHistoryOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#" className="dropdown-link">Parcel Order</a></li>
                            <li><a href="#" className="dropdown-link">Onsite Order</a></li>
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
        </>
    );
};

export default Sidebar;