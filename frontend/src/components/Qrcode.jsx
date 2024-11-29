import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/qrcode.css';
import QR2 from '../assets/QR2.png';
import { HiDotsVertical } from 'react-icons/hi';
import { BiSolidTrashAlt } from 'react-icons/bi';

function Qrcode() {
    const [activeTab, setActiveTab] = useState('tab1');
    const [activeMenu, setActiveMenu] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleDotsClick = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    const handleDeleteClick = (index) => {
        setItemToDelete(index);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        console.log('Item deleted:', itemToDelete);
        setShowDeleteModal(false);
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    return (
        <div className="bg-Qrscan">
            <div className="page-wrapper">
                <div className="content qr">
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

                    {activeTab === 'tab1' && (
                        <div className="tab-pane">
                            <div className="row m-0">
                                <div className="col-12">
                                    <div className="mein-qr">
                                        <div className="QR-header d-flex justify-content-between align-items-center">
                                            <h3 className="text-light">QR Codes</h3>
                                            <button
                                                className="btn btn-primary btn-sm border-0"
                                                style={{ padding: '10px 20px', background: 'rgba(202, 146, 61, 1)' }}
                                            >
                                                Create QR Code
                                            </button>
                                        </div>
                                        <div className="Qr-box">
                                            <div className="row">
                                                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                                    <div className="col-4 col-sm-6 col-md-4 pt-3" key={index}>
                                                        <div
                                                            className="p-3"
                                                            style={{
                                                                background: 'rgba(45, 48, 62, 1)',
                                                                borderRadius: '10px',
                                                            }}
                                                        >
                                                            {/* Header Section */}
                                                            <div className="box-header d-flex justify-content-between align-items-center">
                                                                <h4 style={{ color: 'white' }}>Table No-{item}</h4>
                                                                <div className="menu-icon">
                                                                    <div
                                                                        className="vertical-dots"
                                                                        onClick={() => handleDotsClick(index)}
                                                                    >
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </div>
                                                                    {/* Conditional Dropdown Menu */}
                                                                    {activeMenu === index && (
                                                                        <div
                                                                            className={`dots-menu ${activeMenu === index ? 'active' : ''
                                                                                }`}
                                                                        >
                                                                            <button className="btn btn-outline-primary">Edit</button>
                                                                            <button
                                                                                className="btn btn-outline-danger"
                                                                                onClick={() => handleDeleteClick(index)}
                                                                            >
                                                                                Delete
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {/* Image Section */}
                                                            <div className="qr-image-section mt-3 text-center pt-3">
                                                                <img
                                                                    src={QR2}
                                                                    alt="QR Code"
                                                                    className="img-fluid"
                                                                    style={{
                                                                        maxWidth: '100%',
                                                                        height: 'auto',
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {showDeleteModal && (
                        <div className="modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header mb-2" style={{ border: "1px solid rgba(51, 55, 72, 1)" }}>
                                        <h5 className="modal-title text-light">
                                            <i className="fas fa-trash-alt"></i> Delete QR Code
                                        </h5>
                                    </div>
                                    <center>
                                        <div className="modal-body text-center mb-3">
                                            <BiSolidTrashAlt style={{ width: "46px", height: "46px", lineHeight: "46px" }} />
                                        </div>
                                        <h4 className='text-light'>Delete This QR Code </h4>
                                        <p className='para'>Are you sure you want to delete<br /> this items?</p>
                                    </center>
                                    <div className="modal-footer" style={{ border: "1px solid rgba(51, 55, 72, 1)" }}>
                                        <button className="btn btn-secondary" onClick={handleCancelDelete}>
                                            Cancel
                                        </button>
                                        <button className="btn btn-danger" onClick={handleConfirmDelete}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'tab2' && (
                        <div className="tab-pane">
                            <div className="row m-0">
                                <div className="col-12">
                                    <div className="mein-qr">
                                        <div className="QR-header d-flex justify-content-between align-items-center">
                                            <h3 className="text-light">QR Codes</h3>
                                            <button
                                                className="btn btn-primary btn-sm border-0"
                                                style={{ padding: '10px 20px', background: 'rgba(202, 146, 61, 1)' }}
                                            >
                                                Create QR Code
                                            </button>
                                        </div>
                                        <div className="Qr-box">
                                            <div className="row">
                                                {[1, 2].map((item, index) => (
                                                    <div className="col-4 col-sm-6 col-md-4 pt-3" key={index}>
                                                        <div
                                                            className="p-3"
                                                            style={{
                                                                background: 'rgba(45, 48, 62, 1)',
                                                                borderRadius: '10px',
                                                            }}
                                                        >
                                                            {/* Header Section */}
                                                            <div className="box-header d-flex justify-content-between align-items-center">
                                                                <h4 style={{ color: 'white' }}>Table No-{item}</h4>
                                                                <div className="menu-icon">
                                                                    <div
                                                                        className="vertical-dots"
                                                                        onClick={() => handleDotsClick(index)}
                                                                    >
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </div>
                                                                    {/* Conditional Dropdown Menu */}
                                                                    {activeMenu === index && (
                                                                        <div
                                                                            className={`dots-menu ${activeMenu === index ? 'active' : ''
                                                                                }`}
                                                                        >
                                                                            <button className="btn btn-outline-primary">Edit</button>
                                                                            <button
                                                                                className="btn btn-outline-danger"
                                                                                onClick={() => handleDeleteClick(index)}
                                                                            >
                                                                                Delete
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {/* Image Section */}
                                                            <div className="qr-image-section mt-3 text-center pt-3">
                                                                <img
                                                                    src={QR2}
                                                                    alt="QR Code"
                                                                    className="img-fluid"
                                                                    style={{
                                                                        maxWidth: '100%',
                                                                        height: 'auto',
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {showDeleteModal && (
                        <div className="modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header mb-2" style={{ border: "1px solid rgba(51, 55, 72, 1)" }}>
                                        <h5 className="modal-title text-light">
                                            <i className="fas fa-trash-alt"></i> Delete QR Code
                                        </h5>
                                    </div>
                                    <center>
                                        <div className="modal-body text-center mb-3">
                                            <BiSolidTrashAlt style={{ width: "46px", height: "46px", lineHeight: "46px" }} />
                                        </div>
                                        <h4 className='text-light'>Delete This QR Code </h4>
                                        <p className='para'>Are you sure you want to delete<br /> this items?</p>
                                    </center>
                                    <div className="modal-footer" style={{ border: "1px solid rgba(51, 55, 72, 1)" }}>
                                        <button className="btn btn-secondary" onClick={handleCancelDelete}>
                                            Cancel
                                        </button>
                                        <button className="btn btn-danger" onClick={handleConfirmDelete}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Qrcode;