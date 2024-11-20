import React, { useState } from 'react';
import './CreateQrScan.css';
import tea from '../../assets/tea.png';
import cake from '../../assets/cake.png';
import book from '../../assets/book.png';
import tuf from '../../assets/tuf.png';
import cup from '../../assets/cup.png';
import dust from '../../assets/dust.png';


function CreateQrScan() {
    const [activeTab, setActiveTab] = useState('tab1');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleDotsClick = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    const handleDeleteClick = (index) => {
        setItemToDelete(index);
        setShowDeleteModal(true);
    };

    return (
        <div className="bg-Createqr">
            <div className="page-wrapper">
                <div className="content">
                    {/* Tab Navigation */}
                    <ul className="nav nav-tabs border-0">
                        <li className="nav-item" style={{ padding: "5px 0px", margin: "0px", borderRadius: "0px" }}>
                            <button
                                className={`nav-link btn-sm ${activeTab === 'tab1' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tab1')}
                            >
                                Table
                            </button>
                        </li>
                        <li className="nav-item" style={{ padding: "5px 0px", margin: "0px", borderRadius: "0px" }}>
                            <button
                                className={`nav-link btn-sm ${activeTab === 'tab2' ? 'active' : ''}`}
                                onClick={() => handleTabClick('tab2')}
                            >
                                Counter
                            </button>
                        </li>
                    </ul>

                    {/* QR Code Form */}
                    <div className="tab-pane">
                        <div className="row">
                            <div className="col-12">
                                <div className="mein-qr">
                                    {/* <div className="QR-header d-flex justify-content-between align-items-center mb-3">
                                        <h3 className="text-light">Create QR Codes</h3>
                                        <button
                                            className="btn btn-primary btn-sm border-0"
                                            style={{ padding: '10px 20px', background: 'rgba(202, 146, 61, 1)' }}
                                        >
                                            Create QR Code
                                        </button>
                                    </div> */}

                                    <div className="Qr-box">
                                        {/* <div className="qr-container">
                                            <div className="qr-card"> */}
                                        {/* Header Section */}
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <h4 className="qr-title text-light">Create QR Code</h4>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <label className="circle-checkbox d-flex align-items-center">
                                                    <input type="radio" id="circleTable" name="qrOption" />
                                                    <span className="circle-label text-light"> Table</span>
                                                </label>
                                                <label className="circle-checkbox d-flex align-items-center ms-3">
                                                    <input type="radio" id="circleCounter" name="qrOption" />
                                                    <span className="circle-label text-light"> Counter</span>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Form */}
                                        <form>
                                            <div className="row gx-3 mb-4">
                                                <div className="col-lg-4">
                                                    <label htmlFor="link" className="qr-label text-light">
                                                        Put Your Link Here
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="link"
                                                        name="link"
                                                        className="form-control qr-input"
                                                        placeholder="https://www.musthavemenus.com/category/restaurant-menu.html"
                                                    />
                                                </div>
                                                <div className="col-lg-4">
                                                    <label htmlFor="qrName" className="qr-label text-light">
                                                        Name Your QR (Optional)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="qrName"
                                                        name="qrName"
                                                        className="form-control qr-input"
                                                        placeholder="Food & Drink"
                                                    />
                                                </div>
                                                <div className="col-lg-4">
                                                    <label htmlFor="contentCategory" className="qr-label text-light">
                                                        Select Content Category
                                                    </label>
                                                    <select id="contentCategory" name="contentCategory" className="form-select qr-input">
                                                        <option value="food">Food & Drink</option>
                                                        <option value="business">Business</option>
                                                        <option value="personal">Personal</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row gx-3 mb-4">
                                                <div className="col-lg-3">
                                                    <label htmlFor="additionalText" className="qr-label text-light">
                                                        Additional Text
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="additionalText"
                                                        name="additionalText"
                                                        className="form-control qr-input "
                                                        placeholder="Additional"
                                                    />
                                                </div>
                                                <div className="col-lg-3">
                                                    <label htmlFor="chooseColor" className="qr-label text-light">
                                                        Choose Color
                                                    </label>
                                                    <input
                                                        type="color"
                                                        id="chooseColor"
                                                        name="chooseColor"
                                                        className="form-control qr-input"
                                                    />
                                                </div>
                                                <div className="col-lg-3">
                                                    <label htmlFor="frameBg" className="qr-label text-light">
                                                        Frame Background
                                                    </label>
                                                    <input
                                                        type="color"
                                                        id="frameBg"
                                                        name="frameBg"
                                                        className="form-control qr-input"
                                                    />
                                                </div>
                                                <div className="col-lg-3">
                                                    <label htmlFor="qrBg" className="qr-label text-light">
                                                        QR Code Background
                                                    </label>
                                                    <input
                                                        type="color"
                                                        id="qrBg"
                                                        name="qrBg"
                                                        className="form-control qr-input"
                                                    />
                                                </div>
                                            </div>

                                            {/* Thematic Section */}
                                            <div className="thematic-section mb-4">
                                                <h5 className="qr-label">Thematic</h5>
                                                <div className="thematic-icons">
                                                    <div className="thematic-box">
                                                        <img src={tea} alt="tea" />
                                                    </div>
                                                    <div className="thematic-box">
                                                        <img src={cup} alt="cup" />
                                                    </div>
                                                    <div className="thematic-box">
                                                        <img src={cake} alt="cake" />
                                                    </div>
                                                    <div className="thematic-box">
                                                        <img src={book} alt="book" />
                                                    </div>
                                                    <div className="thematic-box">
                                                        <img src={dust} alt="dust" />
                                                    </div>
                                                    <div className="thematic-box">
                                                        <img src={tuf} alt="tuf" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Download Section */}
                                            <div className="text-center mt-4">
                                                <button type="submit" className="btn download-btn">
                                                    Download QR
                                                </button>
                                            </div>
                                        </form>
                                        {/* </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateQrScan;
