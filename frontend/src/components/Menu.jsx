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
    const handleOpenAddCategoryPopup = () => setShowAddCategoryPopup(true);
    const handleCloseAddCategoryPopup = () => setShowAddCategoryPopup(false);
    const navigate = useNavigate()

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


    const handleEditClick = (card) => {
        setEditCardData({ ...card, rate: "", discount: "", availability: "Available" });
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

    const handleDeleteItem = (itemId) => {
        setCategoryData((prevData) => {
            const updatedData = { ...prevData };
            Object.keys(updatedData).forEach((key) => {
                updatedData[key] = updatedData[key].filter((item) => item.id !== itemId);
            });
            return updatedData;
        });
        handleCloseDeletePopup();
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const categoryData = {

        all: [
            { title: 'burger Cheeseburger ', description: 'including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles,', imgSrc: 'https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1751.jpg?semt=ais_hybrid', price: '$10.99' },
            { title: 'Green Leaves Burger', description: 'including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles,', imgSrc: 'https://img.freepik.com/premium-photo/delicious-fresh-burger-generative-ai_819176-161.jpg?semt=ais_hybrid', price: '$25.99' },
            { title: 'Snack Pack', description: 'including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles,', imgSrc: 'https://img.freepik.com/free-photo/delicious-dessert-with-ice-cream_23-2148425395.jpg?semt=ais_hybrid', price: '$5.49' },
            { title: 'Kids Special', description: 'including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles,', imgSrc: 'https://img.freepik.com/premium-photo/waffle-cups-with-chocolate-ice-cream_80013-2651.jpg?semt=ais_hybrid', price: '$8.99' },
            { title: 'Classic Combo', description: 'including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles,', imgSrc: 'https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?semt=ais_hybrid', price: '$9.49' },
            { title: 'Value Pack', description: 'including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles,', imgSrc: 'https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26590.jpg?semt=ais_hybrid', price: '$7.99' },
            { title: 'Mini Feast', description: 'including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles,', imgSrc: 'https://img.freepik.com/free-photo/front-view-tasty-ham-sandwiches-with-french-fries-dark-surface_179666-34644.jpg?semt=ais_hybrid', price: '$6.49' },
            { title: 'Super Snack', description: 'including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles,', imgSrc: 'https://img.freepik.com/free-photo/side-view-club-sandwich-with-french-fries-ketchup-with-mayonnaise_140725-11440.jpg?semt=ais_hybrid', price: '$4.99' },
            { title: 'Budget Meal', description: 'including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles,', imgSrc: 'https://img.freepik.com/free-photo/glass-orange-juice-fresh-fruit-floor-with-ice-cubes_1150-23633.jpg?semt=ais_hybrid', price: '$3.99' },
            { title: 'Gourmet Pack', description: 'including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles,', imgSrc: 'https://img.freepik.com/premium-photo/lemon-orange-strawberry-juice-black_34435-2633.jpg?semt=ais_hybrid', price: '$15.99' }
        ],
        burger: [
            { title: 'burger Cheeseburger', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637309.jpg?semt=ais_hybrid', price: '$6.99' },
            { title: 'Green Leaves Burger', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/hamburger-topped-with-green-leaf_922357-40347.jpg?semt=ais_hybrid', price: '$5.99' },
            { title: 'Cheese Burger', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/burger-fresh-bun-with-sesame-seeds_140725-7777.jpg?semt=ais_hybrid', price: '$7.49' },
            { title: 'Miso Burgers', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/front-view-beef-burgers-with-bacon-slate-board_23-2148784477.jpg?semt=ais_hybrid', price: '$9.99' },
            { title: 'Burger Chefs', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/big-max-burger-standing-piece-wood_114579-2174.jpg?semt=ais_hybrid', price: '$6.99' },
            { title: 'Burger Monsta', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/front-view-meat-burger-with-tomatoes-cheese-salad-dark-background_140725-89544.jpg?semt=ais_hybrid', price: '$8.49' },
            { title: 'Paneer Burgerr', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/meat-burger-cheese-tomato-beans-onion-side-view_141793-2382.jpg?semt=ais_hybrid', price: '$7.99' },
            { title: 'Green Leaves Burger', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/high-angle-beef-burger-with-salad_23-2148784488.jpg?semt=ais_hybrid', price: '$8.99' },
            { title: 'BBQ Burger', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/fire-meat-burger-wooden-hemp_140725-7009.jpg?semt=ais_hybrid', price: '$7.99' },
            { title: 'burger Cheeseburger', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/hamburger-fries-table_7939-1828.jpg?semt=ais_hybrid', price: '$6.49' }
        ],
        icecream: [
            { title: 'Vanilla Cone', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/delicious-ice-cream-cones-with-vanilla_23-2148425363.jpg?semt=ais_hybrid', price: '$2.99' },
            { title: 'Chocolate Sundae', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/tasty-cold-chocolate-vanilla-ice-cream-sundae-generative-ai_1645-3878.jpg?semt=ais_hybrid', price: '$3.49' },
            { title: 'Strawberry Delight', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/detox-healthy-superfoods-breakfast-bowl-vegan-chia-seeds-pudding-with-strawberries-almond-strawberries-smoothie_2829-6984.jpg?semt=ais_hybrid', price: '$3.99' },
            { title: 'Mint Chip', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/close-up-delicious-chocolate-bar-with-mint_23-2150660937.jpg?semt=ais_hybrid', price: '$3.29' },
            { title: 'Caramel Swirl', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/piece-chocolate-with-spiral-it_1105043-139345.jpg?semt=ais_hybrid', price: '$3.79' },
            { title: 'Vanilla Cone', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/delicious-ice-cream-cones-with-vanilla_23-2148425363.jpg?semt=ais_hybrid', price: '$2.99' },
            { title: 'Chocolate Sundae', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/tasty-cold-chocolate-vanilla-ice-cream-sundae-generative-ai_1645-3878.jpg?semt=ais_hybrid', price: '$3.49' },
            { title: 'Strawberry Delight', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/detox-healthy-superfoods-breakfast-bowl-vegan-chia-seeds-pudding-with-strawberries-almond-strawberries-smoothie_2829-6984.jpg?semt=ais_hybrid', price: '$3.99' },
            { title: 'Mint Chip', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/close-up-delicious-chocolate-bar-with-mint_23-2150660937.jpg?semt=ais_hybrid', price: '$3.29' },
            { title: 'Caramel Swirl', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/piece-chocolate-with-spiral-it_1105043-139345.jpg?semt=ais_hybrid', price: '$3.79' },

        ],
        frenchfries: [
            { title: 'Classic Fries', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/french-fries-fried-yellow-black-background-with-smoke_504796-154.jpg?semt=ais_hybrid', price: '$2.49' },
            { title: 'Cheese Fries', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/traditional-portuguese-snack-food-francesinha-sandwich-bread-cheese-pork-ham-sausages-with-tomato-beer-sauce-french-fries-with-glass-beer-potatoes-black-table-copy-space_136595-12810.jpg?semt=ais_hybrid', price: '$3.99' },
            { title: 'Curly Fries', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/french-fries-with-ketchup-wood-table_23-2148272961.jpg?semt=ais_hybrid', price: '$2.79' },
            { title: 'Sweet Potato Fries', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/carrot-fries-terracotta-plate-with-coriander-dip_419341-101096.jpg?semt=ais_hybrid', price: '$3.29' },
            { title: 'Garlic Fries', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/roasted-parsnips-light-background-side-dish-plate-delicious-vegetarian-breakfast-snack-clean-eating-dieting-vegan-food-concept-banner-menu-recipe-place-text-top-view_114941-4176.jpg?semt=ais_hybrid', price: '$3.49' },
        ],
        sandwich: [
            { title: 'BLT Sandwich', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/club-sandwich-with-cheese-cucumber-tomato-smoked-meat-salami-served-with-french-fries_2829-19823.jpg?semt=ais_hybrid', price: '$5.99' },
            { title: 'Grilled Cheese', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/stack-homemade-pancakes-with-melting-syrup-generated-by-ai_24640-80820.jpg?semt=ais_hybrid', price: '$4.99' },
            { title: 'Turkey Club', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/club-sandwich-with-french-fries_141793-17436.jpg?semt=ais_hybrid', price: '$6.49' },
            { title: 'Ham and Swiss', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/ham-wrapped-roll-sprinkled-with-grated-parmesan_140725-3556.jpg?semt=ais_hybrid', price: '$5.79' },
            { title: 'Chicken Pesto', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/baked-chicken-rolls-with-spinach-cheese-plate_2829-6153.jpg?semt=ais_hybrid', price: '$7.29' },
        ],
        drinkjuice: [
            { title: 'Lemonade', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/lemonade-drink-jar-glass-wooden-table_123827-23059.jpg?semt=ais_hybrid', price: '$2.49' },
            { title: 'Orange Juice', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-vector/orange-juice-set_98292-4918.jpg?semt=ais_hybrid', price: '$3.49' },
            { title: 'Iced Tea', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/glass-coca-cola-with-ice-cubes-lemon-slice-grey-background_140725-10691.jpg?semt=ais_hybrid', price: '$2.79' },
            { title: 'Apple Juice', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/free-photo/front-view-fresh-apple-juice-with-fresh-apples-dark-drink-photo-color-cocktail-fruit_140725-92829.jpg?semt=ais_hybrid', price: '$3.19' },
            { title: 'Berry Smoothie', description: 'Including premium beef, freshly baked brioche buns, crisp lettuce, ripe tomatoes, savory cheese, tangy pickles.', imgSrc: 'https://img.freepik.com/premium-photo/berry-smoothie_111869-1111.jpg?semt=ais_hybrid', price: '$4.99' }
        ],

    };


    return (
        <div className="bg-menu">
            <div className="page-wrapper">
                <div className="content">
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
                                            {(categoryData[key] || []).map((card, index) => (
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
                                                                src={card.imgSrc}
                                                                className="card-img-top mb-3"
                                                            />
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
                                                                            onClick={() => handleDeleteClick(card)}
                                                                        >
                                                                            Delete
                                                                        </button>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <Card.Body className="mx-2">
                                                            <Card.Title style={{ color: "rgba(255, 255, 255, 1)" }}>
                                                                {card.title}
                                                            </Card.Title>
                                                            <Card.Text
                                                                style={{
                                                                    fontSize: "15px",
                                                                    color: "rgba(171, 187, 194, 1)",
                                                                    margin: "0",
                                                                    marginBottom: "15px",
                                                                }}
                                                            >
                                                                {card.description}
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
                                                                backgroundColor: card.isVeg
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
                                            ))}
                                        </Row>
                                    </Tab>
                                ))
                            ) : (
                                <p className='text-light'>No categories available</p>
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
                            {uploadedImage ? (
                                <img
                                    src={uploadedImage}
                                    alt="Uploaded"
                                    style={{ maxWidth: "100%", maxHeight: "150px" }}
                                />
                            ) : (
                                <p className='text-light'>Drag & drop an image here, or click to select one</p>
                            )}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="itemName" className="form-label text-light">
                            Item Name
                        </label>
                        <select
                            style={{ background: "rgba(45, 48, 62, 1)" }}
                            className="form-select border-0 text-light"
                            id="itemName"
                            value={editCardData?.title || ""}
                            onChange={(e) => setEditCardData({ ...editCardData, title: e.target.value })}>
                            <option value="">Select a food item</option>
                            <option value="Butter Chicken">Butter Chicken</option>
                            <option value="Paneer Tikka">Paneer Tikka</option>
                            <option value="Biryani">Biryani</option>
                            <option value="Masala Dosa">Masala Dosa</option>
                            <option value="Chole Bhature">Chole Bhature</option>
                            <option value="Rajma Chawal">Rajma Chawal</option>
                            <option value="Pav Bhaji">Pav Bhaji</option>
                            <option value="Tandoori Roti">Tandoori Roti</option>
                        </select>
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
                            placeholder="including premium beef, freshly baked brioche buns."
                            value={editCardData?.ingredients || ""}
                            onChange={(e) => setEditCardData({ ...editCardData, ingredients: e.target.value })}
                        />
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="itemRate" className="form-label text-light">
                                Rate
                            </label>
                            <input
                                style={{ background: "rgba(45, 48, 62, 1)" }}
                                type="number"
                                className="form-control custom-input border-0"
                                placeholder="500"
                                id="itemRate"
                                value={editCardData?.rate || ""}
                                onChange={(e) => setEditCardData({ ...editCardData, rate: e.target.value })}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="itemDiscount" className="form-label text-light">
                                Discount
                            </label>
                            <input
                                style={{ background: "rgba(45, 48, 62, 1)" }}
                                type="number"
                                className="form-control custom-input border-0"
                                placeholder="50"
                                id="itemDiscount"
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
                            placeholder="Available"
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
                        onClick={() => console.log(editCardData, uploadedImage)}
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
