import React, { useEffect, useState } from 'react';
import { Tab, Tabs, Card, Row, Col } from 'react-bootstrap';
import { FaSquarePlus } from 'react-icons/fa6';
import { useDropzone } from "react-dropzone";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/menu.css';
import api from '../api';

const Menu = () => {
    const token = localStorage.getItem("token");
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [editCardData, setEditCardData] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [showAddCategoryPopup, setShowAddCategoryPopup] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [categories, setCategories] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const handleOpenAddCategoryPopup = () => setShowAddCategoryPopup(true);
    const handleCloseAddCategoryPopup = () => setShowAddCategoryPopup(false);
    const navigate = useNavigate();
    const filteredItems = activeCategory === "all" ?
        Object.values(categoryData).flat() :
        Object.values(categoryData).flat().filter((item) => item.category.name === activeCategory);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length > 0) {
                const file = acceptedFiles[0];
                const fileURL = URL.createObjectURL(file);
                setUploadedImage({ file, preview: fileURL });
            }
        },
    });

    const handleAddCategory = async () => {
        try {
            const formData = new FormData();
            formData.append("categoryName", categoryName);
            formData.append("image", uploadedImage.file);

            const response = await api.post("/api/categories/", formData, { headers: { 'x-auth-token': token, 'Content-Type': 'multipart/form-data' } });
            if (response.status === 201) {
                alert("Category Added Successfully");
                setShowAddCategoryPopup(false)
                setCategoryName("");
                setUploadedImage(null);
            }
        } catch (error) {
            console.error("Error adding category:", error);
        }
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await api.get("/api/categories/", { headers: { 'x-auth-token': token } });
                setCategories(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems();
    }, []);

    const handleAddFood = (id) => {
        navigate('/addfood', { state: { id } });
    }

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await api.get("/api/items/", { headers: { 'x-auth-token': token } });
                setCategoryData(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems();
    }, []);

    const handleEditClick = (card) => {
        setEditCardData({ ...card });
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setEditCardData(null);
        setUploadedImage(null);
        setShowDeletePopup(false)
    };

    const handleDeleteClick = (itemId) => {
        setSelectedItemId(itemId);
        setShowDeletePopup(true);
    };

    const handleSave = async () => {
        try {
            const updatedData = {
                ...editCardData,
                image: uploadedImage?.file ? uploadedImage.file : editCardData.image
            };

            const response = await api.put(`/api/items/${editCardData._id}`, updatedData, { headers: { 'x-auth-token': token } });
            window.alert("Item Updated Successfully");
            handleClosePopup();
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    const handleDeleteItem = async () => {
        try {
            const response = await api.delete(`/api/items/${selectedItemId}`, { headers: { 'x-auth-token': token } });
            window.alert("Item Deleted Successfully");
        } catch (error) {
            console.error("Error deleting card:", error);
        }
        setShowDeletePopup(false)
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <div className="bg-menu">
            <div className="page-wrapper">
                <div className="content vh-100">
                    <div className="menu-header">
                        <h2>Categories (250)</h2>
                        <button className="btn-add-category" onClick={handleOpenAddCategoryPopup}>
                            <span>
                                <FaSquarePlus style={{ width: "24px", height: "24px", marginRight: "10px" }} />
                            </span>
                            Add Categories
                        </button>
                    </div>
                    <Tabs
                        activeKey={activeCategory}
                        onSelect={(categories) => setActiveCategory(categories)}
                        className="mb-3 border-0 d-flex justify-content-center profile-tab">
                        {!categories ? (<p className='text-light'>Loading Categories</p>) : (
                            categories.length > 0 ? (
                                categories.map(({ _id, name, image, key }) => (
                                    <Tab
                                        eventKey={name}
                                        title={
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={image}
                                                    alt={name}
                                                    style={{ width: "50px", height: "50px", marginRight: "8px" }} />
                                                <span style={{ color: "white", textTransform: 'capitalize' }}>{name}</span>
                                            </div>
                                        }
                                        key={key}>
                                        <div className="menu-header">
                                            <h2>{name}</h2>
                                            <button
                                                style={{ color: "white", textTransform: 'capitalize' }}
                                                className="btn-add-category"
                                                onClick={() => handleAddFood(_id)}>
                                                <span>
                                                    <FaSquarePlus
                                                        style={{ width: "24px", height: "24px", marginRight: "10px" }}
                                                    />
                                                </span>
                                                Add {name}
                                            </button>
                                        </div>
                                        <Row className='m-0'>
                                            {filteredItems.length > 0 ? (
                                                filteredItems.map((card, index) => (
                                                    <Col xs={12} sm={6} md={6} lg={4} key={index} className="mb-4">
                                                        <Card
                                                            className="h-100 border-0 p-3"
                                                            style={{
                                                                background: "rgba(37, 40, 54, 1)",
                                                                position: "relative",
                                                            }}
                                                        >
                                                            <div className="image-container">
                                                                <Card.Img
                                                                    variant="top"
                                                                    src={card.image}
                                                                    className="card-img-top mb-3"
                                                                />
                                                                {card.discount && (
                                                                    <div
                                                                        style={{
                                                                            position: "absolute",
                                                                            top: "10px",
                                                                            left: "10px",
                                                                            backgroundColor: "rgba(202, 146, 61, 1)",
                                                                            color: "white",
                                                                            padding: "5px 10px",
                                                                            borderRadius: "5px",
                                                                            fontSize: "14px",
                                                                            fontWeight: "bold",
                                                                        }}
                                                                    >
                                                                        {`${card.discount}% OFF`}
                                                                    </div>
                                                                )}
                                                                <div className="menu-dropdown">
                                                                    <span
                                                                        className="menu-icon"
                                                                        onClick={() => toggleDropdown(index)}
                                                                    >
                                                                        &#x22EE;
                                                                    </span>
                                                                    {activeDropdown === index && (
                                                                        <div className="menu-options">
                                                                            <button
                                                                                className="menu-edit"
                                                                                onClick={() => handleEditClick(card)}
                                                                            >
                                                                                Edit
                                                                            </button>
                                                                            <button
                                                                                className="menu-delete"
                                                                                onClick={() => handleDeleteClick(card._id)}
                                                                            >
                                                                                Delete
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <Card.Body className="mx-2">
                                                                <Card.Title style={{ color: "rgba(255, 255, 255, 1)" }}>
                                                                    {card.name}
                                                                </Card.Title>
                                                                <Card.Text
                                                                    style={{
                                                                        fontSize: "15px",
                                                                        color: "rgba(171, 187, 194, 1)",
                                                                        margin: "0",
                                                                        marginBottom: "15px",
                                                                    }}
                                                                >
                                                                    {card.ingredients}
                                                                </Card.Text>
                                                                <Card.Text
                                                                    className="text-muted price"
                                                                    style={{ fontSize: "24px", margin: "0" }}
                                                                >
                                                                    {card.price}
                                                                </Card.Text>
                                                            </Card.Body>
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    bottom: "20px",
                                                                    right: "10px",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    width: "20px",
                                                                    height: "20px",
                                                                    borderRadius: "50%",
                                                                    backgroundColor: card.vegNonVeg === 'veg'
                                                                        ? "rgba(40, 167, 69, 1)"
                                                                        : "rgba(220, 53, 69, 1)",
                                                                    zIndex: 1,
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        width: "10px",
                                                                        height: "10px",
                                                                        backgroundColor: "white",
                                                                        borderRadius: "50%",
                                                                    }}
                                                                ></span>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                ))) : (
                                                <p className='text-light'>No Items Available</p>
                                            )}
                                        </Row>
                                    </Tab>
                                ))
                            ) : (
                                <p className='text-light'>No Categories Available</p>
                            )
                        )}
                    </Tabs>
                </div>
            </div>

            <Modal show={showPopup} onHide={handleClosePopup} centered>
                <Modal.Header style={{ background: "rgba(37, 40, 54, 1)", border: "1px solid rgba(51, 55, 72, 1)" }}>
                    <Modal.Title className='text-light'>Edit Item</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "rgba(37, 40, 54, 1)" }}>
                    <div {...getRootProps()} className="dropzone mb-3">
                        <input {...getInputProps()} />
                        <div
                            style={{
                                border: "1px solid rgba(255, 255, 255, 1)",
                                padding: "20px",
                                textAlign: "center",
                                borderRadius: "10px",
                                background: "rgba(37, 40, 54, 1)",
                            }}
                        >
                            {uploadedImage?.preview ? (
                                <img
                                    src={uploadedImage.preview}
                                    alt="Uploaded"
                                    style={{ maxWidth: "100%", maxHeight: "150px" }}
                                />
                            ) : editCardData?.image ? (
                                <img
                                    src={editCardData.image}
                                    alt="Existing"
                                    style={{ maxWidth: "100%", maxHeight: "150px" }}
                                />
                            ) : (
                                <p className="text-light">Drag & drop an image here, or click to select one</p>
                            )}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="itemName" className="form-label text-light">
                            Item Name
                        </label>
                        <input
                            style={{ background: "rgba(45, 48, 62, 1)" }}
                            type="text"
                            className="form-control custom-input border-0"
                            id="name"
                            value={editCardData?.name || ""}
                            onChange={(e) => setEditCardData({ ...editCardData, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="itemIngredients" className="form-label text-light">
                            Item Ingredients
                        </label>
                        <input
                            style={{ background: "rgba(45, 48, 62, 1)" }}
                            type="text"
                            className="form-control custom-input border-0"
                            id="itemIngredients"
                            value={editCardData?.ingredients || ""}
                            onChange={(e) => setEditCardData({ ...editCardData, ingredients: e.target.value })}
                        />
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="itemRate" className="form-label text-light">
                                Item Rate
                            </label>
                            <input
                                style={{ background: "rgba(45, 48, 62, 1)" }}
                                type="number"
                                className="form-control custom-input border-0"
                                id="price"
                                value={editCardData?.price || ""}
                                onChange={(e) => setEditCardData({ ...editCardData, price: e.target.value })}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="itemDiscount" className="form-label text-light">
                                Add Discount
                            </label>
                            <input
                                style={{ background: "rgba(45, 48, 62, 1)" }}
                                type="number"
                                className="form-control custom-input border-0"
                                id="discount"
                                value={editCardData?.discount || ""}
                                onChange={(e) => setEditCardData({ ...editCardData, discount: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="itemAvailability" className="form-label text-light">
                            Availability
                        </label>
                        <select
                            style={{ background: "rgba(45, 48, 62, 1)", }}
                            className="form-select custom-input border-0 text-light"
                            id="itemAvailability"
                            value={editCardData?.availability || "Available"}
                            onChange={(e) => setEditCardData({ ...editCardData, availability: e.target.value })}
                        >
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ background: "rgba(37, 40, 54, 1)", border: "1px solid rgba(51, 55, 72, 1)" }}>
                    <Button variant="secondary" onClick={handleClosePopup}>
                        Cancel
                    </Button>
                    <Button
                        variant="warning"
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDeletePopup} onHide={() => setShowDeletePopup(false)} centered>
                <Modal.Header style={{ background: "rgba(37, 40, 54, 1)", border: "1px solid rgba(51, 55, 72, 1)" }}>
                    <Modal.Title className='text-light'>
                        Delete Item
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center' style={{ background: "rgba(37, 40, 54, 1)", border: "1px solid rgba(51, 55, 72, 1)", color: "rgba(171, 187, 194, 1)" }}>
                    <FaTrashAlt className="text-danger me-2" style={{ height: "46px", width: "46px" }} /><br /><span className='text-light fs-3' style={{ fontWeight: "600" }}>Delete Hamburger</span><br />Are you sure you want to delete <br /> this item?</Modal.Body>
                <Modal.Footer style={{ background: "rgba(37, 40, 54, 1)", border: "1px solid rgba(51, 55, 72, 1)" }}>
                    <Button variant="secondary" onClick={() => setShowDeletePopup(false)}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleDeleteItem}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showAddCategoryPopup} onHide={handleCloseAddCategoryPopup} centered>
                <Modal.Header style={{ background: "rgba(37, 40, 54, 1)", border: "1px solid rgba(51, 55, 72, 1)" }}>
                    <Modal.Title className="text-light">Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "rgba(37, 40, 54, 1)" }}>
                    <div className="mb-3">
                        <label htmlFor="categoryName" className="form-label text-light">Category Name</label>
                        <input
                            style={{ background: "rgba(45, 48, 62, 1)" }}
                            type="text"
                            className="form-control custom-input border-0 text-light"
                            id="categoryName"
                            placeholder="Enter category name"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>
                    <div {...getRootProps()} className="dropzone mb-3">
                        <input {...getInputProps()} />
                        <div
                            style={{
                                border: "1px dashed rgba(255, 255, 255, 0.7)",
                                padding: "20px",
                                textAlign: "center",
                                borderRadius: "10px",
                            }}
                        >
                            {uploadedImage ? (
                                <img src={uploadedImage.preview} alt="Uploaded" style={{ maxWidth: "100%", maxHeight: "150px" }} />
                            ) : (
                                isDragActive ? <p className='text-light'>Drop the files here ...</p> : <p className="text-light">Drag & drop an image here, or click to select one</p>
                            )}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ background: "rgba(37, 40, 54, 1)", border: "1px solid rgba(51, 55, 72, 1)" }}>
                    <Button variant="secondary" onClick={handleCloseAddCategoryPopup}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleAddCategory}>
                        Add Category
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default Menu;
