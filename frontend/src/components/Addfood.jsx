import React, { useState } from 'react';
import { BiSolidTrash } from 'react-icons/bi';
import '../styles/addfood.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import api from '../api';

function AddFood() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        vegNonVeg: "",
        name: "",
        ingredients: "",
        price: "",
        discount: "0",
        itemType: "spicy",
        spicyLevel: "regular",
        image: null,
        category: state.id
    });

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFormData({ ...formData, image: acceptedFiles[0] });
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            const data = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value);
            });
            
            const response = await api.post("/api/items/", formData, { headers: { 'x-auth-token': token, 'Content-Type': 'multipart/form-data' } });
            if (response.status === 201) {
                window.alert('Item Added Successfully');
                navigate('/menu')
            };
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    return (
        <>
            <div className="bg-addfood">
                <div className="page-wrapper">
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="addfood mb-3">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="header-2">
                                            <h1 className="header-title text-light">Add Items</h1>
                                            <div className="btn-group" role="group" aria-label="Food Type">
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    name="vegNonVeg"
                                                    id="veg"
                                                    value="veg"
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    className="btn btn-success rounded-pill px-4 py-2 mx-2"
                                                    htmlFor="veg"
                                                    style={{ display: "inline-flex", alignItems: "center" }}
                                                >
                                                    <span
                                                        className="circle"
                                                        style={{
                                                            width: "10px",
                                                            height: "10px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "green",
                                                            display: "inline-block",
                                                            marginRight: "8px",
                                                        }}
                                                    ></span>
                                                    Veg
                                                </label>
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    name="vegNonVeg"
                                                    id="non-veg"
                                                    value="non-veg"
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    className="btn btn-danger rounded-pill px-4 py-2 mx-2"
                                                    htmlFor="non-veg"
                                                    style={{ display: "inline-flex", alignItems: "center" }}
                                                >
                                                    <span
                                                        className="circle"
                                                        style={{
                                                            width: "10px",
                                                            height: "10px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "red",
                                                            display: "inline-block",
                                                            marginRight: "8px",
                                                        }}
                                                    ></span>
                                                    Non-Veg
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="addfood">
                                <div className="padded-section">
                                    <div className="row">
                                        <div className="col-12 form-layout">
                                            <div className="form-group">
                                                <label htmlFor="itemName" className='text-light'>Item Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter item name"
                                                    className="form-control border-0"
                                                    style={{ background: "rgba(45, 48, 62, 1)" }}
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="itemIngredients" className='text-light'>Item Ingredients</label>
                                                <input
                                                    type="text"
                                                    id="ingredients"
                                                    name="ingredients"
                                                    placeholder="Enter item ingredients"
                                                    className="form-control border-0"
                                                    style={{ background: "rgba(45, 48, 62, 1)" }}
                                                    value={formData.ingredients}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="itemPrice" className='text-light'>Item Price</label>
                                                <input
                                                    type="number"
                                                    id="price"
                                                    name="price"
                                                    placeholder="Enter item price"
                                                    className="form-control border-0"
                                                    style={{ background: "rgba(45, 48, 62, 1)" }}
                                                    value={formData.price}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 form-layout">
                                            <div className="form-group">
                                                <label htmlFor="itemDiscount" className='text-light'>Add Discount</label>
                                                <input
                                                    type="number"
                                                    id="discount"
                                                    name="discount"
                                                    placeholder="Enter discount"
                                                    className="form-control border-0"
                                                    style={{ background: "rgba(45, 48, 62, 1)" }}
                                                    value={formData.discount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="itemType" className='text-light' >Select Item Type</label>
                                                <select id="itemType"
                                                    name="itemType"
                                                    className="form-control border-0"
                                                    style={{ background: "rgba(45, 48, 62, 1)" }}
                                                    value={formData.itemType}
                                                    onChange={handleChange}
                                                >
                                                    <option value="spicy" className='text-light'>Spicy</option>
                                                    <option value="sweet" className='text-light'>Sweet</option>
                                                </select>
                                            </div>
                                            <div className="form-group mt-2">
                                                <label className='text-light'>Spiciness Level</label>
                                                <div className="checkbox-group">
                                                    {['less', 'regular', 'extra'].map((level) => (
                                                        <div className="form-check" key={level}>
                                                            <input
                                                                className="form-check-input p-0"
                                                                type="radio"
                                                                name="spicyLevel"
                                                                value={level}
                                                                onChange={handleChange}
                                                                checked={formData.spicyLevel === level}
                                                            />
                                                            <label className="form-check-label text-light">{level}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div {...getRootProps()} className="dropzone image-drop-area border-0" style={{ background: " rgba(45, 48, 62, 1)" }}>
                                                <p className='text-light'>Drag and drop an image here or click to upload</p>
                                                <input {...getInputProps()} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="btns pt-3 d-flex justify-content-end">
                                <span
                                    className="btn-step3"
                                    style={{
                                        padding: "8px 16px",
                                        backgroundColor: "rgb(202, 146, 61)",
                                        border: "none",
                                        borderRadius: "5px",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        marginRight: "10px",
                                    }}
                                >
                                    Add Step
                                </span>
                                <button
                                    type="submit"
                                    className="btn-save"
                                    style={{
                                        padding: "8px 16px",
                                        backgroundColor: "#28a745",
                                        border: "none",
                                        borderRadius: "5px",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                        </form>


                        {/* step1 */}
                        {/* <div className="addfood mb-2">
                            <div className="padded-section">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className='text-light mb-2'>Step 1</h4>
                                        <div className="hea-3">
                                            <form className="form-layout pt-3">
                                                <div className="form-group inputttt">
                                                    <label htmlFor="customizationTitle" className='text-light'>Customization Title</label>
                                                    <input
                                                        type="text"
                                                        id="customizationTitle"
                                                        placeholder="Enter Customization Title"
                                                        className="form-control border-0"
                                                        style={{ background: "rgba(45, 48, 62, 1)" }}
                                                    />
                                                </div>

                                                <div className="form-group" style={{ paddingTop: "35px" }}>
                                                    <div className="checkbox-group">
                                                        <label className='text-light'>
                                                            <input type="checkbox" value="multiple" style={{ borderRadius: "100%" }} /> Multiple
                                                        </label>
                                                        <label className='text-light' style={{ marginLeft: "15px" }}>
                                                            <input type="checkbox" value="single" /> Single
                                                        </label>
                                                    </div>
                                                </div>
                                            </form>

                                            <div className="form-group-1 mt-3 text-end">
                                                <button
                                                    className="btn-custom"
                                                    style={{
                                                        padding: "8px 16px",
                                                        background: "rgba(202, 146, 61, 1)",
                                                        border: "none",
                                                        borderRadius: "5px",
                                                        color: "#fff",
                                                        fontWeight: "bold",
                                                        cursor: "pointer",
                                                        transition: "background-color 0.3s ease",
                                                    }}>
                                                    Add Customization
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="padded-section-2 mb-2">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="addddd p-2">
                                                <form className="form-layout">
                                                    <div className="form-group">
                                                        <label htmlFor="itemName" className='text-light'>Customization Name</label>
                                                        <input
                                                            type="text"
                                                            id="itemName"
                                                            placeholder="Enter Customization Name"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="itemIngredients" className='text-light'>Customization Detail</label>
                                                        <input
                                                            type="text"
                                                            id="itemIngredients"
                                                            placeholder="Enter Customization Detail"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="itemIngredients" className='text-light'>Extra Rate</label>
                                                        <input
                                                            type="number"
                                                            id="itemIngredients"
                                                            placeholder="Enter Extra Rate"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="step-icon">
                                                        <BiSolidTrash className="text-light iconnn" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="padded-section-2">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="addddd p-2">
                                                <form className="form-layout">
                                                    <div className="form-group">
                                                        <label htmlFor="itemName" className='text-light'>Customization Name</label>
                                                        <input
                                                            type="text"
                                                            id="itemName"
                                                            placeholder="Enter Customization Name"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="itemIngredients" className='text-light'>Customization Detail</label>
                                                        <input
                                                            type="text"
                                                            id="itemIngredients"
                                                            placeholder="Enter Customization Detail"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="itemIngredients" className='text-light'>Extra Rate</label>
                                                        <input
                                                            type="number"
                                                            id="itemIngredients"
                                                            placeholder="Enter Extra Rate"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="step-icon">
                                                        <BiSolidTrash className="text-light iconnn" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* step2 */}
                        {/* <div className="addfood">
                            <div className="padded-section">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className='text-light mb-2'>Step 2</h4>
                                        <div className="hea-3">
                                            <form className="form-layout pt-3">
                                                <div className="form-group">
                                                    <label htmlFor="customizationTitle" className='text-light'>Customization Title</label>
                                                    <input
                                                        type="text"
                                                        id="customizationTitle"
                                                        placeholder="Enter Customization Title"
                                                        className="form-control border-0"
                                                        style={{ background: "rgba(45, 48, 62, 1)" }}
                                                    />
                                                </div>

                                                <div className="form-group" style={{ paddingTop: "35px" }}>
                                                    <div className="checkbox-group">
                                                        <label className='text-light'>
                                                            <input type="checkbox" value="multiple" style={{ borderRadius: "100%" }} /> Multiple
                                                        </label>
                                                        <label className='text-light' style={{ marginLeft: "15px" }}>
                                                            <input type="checkbox" value="single" /> Single
                                                        </label>
                                                    </div>
                                                </div>
                                            </form>

                                            <div className="form-group-1 mt-3 text-end">
                                                <button
                                                    className="btn-custom"
                                                    style={{
                                                        padding: "8px 16px",
                                                        background: "rgba(202, 146, 61, 1)",
                                                        border: "none",
                                                        borderRadius: "5px",
                                                        color: "#fff",
                                                        fontWeight: "bold",
                                                        cursor: "pointer",
                                                        transition: "background-color 0.3s ease",
                                                    }}>
                                                    Add Customization
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="padded-section-2 mb-2">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="addddd p-2">
                                                <form className="form-layout">
                                                    <div className="form-group">
                                                        <label htmlFor="itemName" className='text-light'>Customization Name</label>
                                                        <input
                                                            type="text"
                                                            id="itemName"
                                                            placeholder="Enter Customization Name"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="itemIngredients" className='text-light'>Customization Detail</label>
                                                        <input
                                                            type="text"
                                                            id="itemIngredients"
                                                            placeholder="Enter Customization Detail"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="itemIngredients" className='text-light'>Extra Rate</label>
                                                        <input
                                                            type="number"
                                                            id="itemIngredients"
                                                            placeholder="Enter Extra Rate"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="step-icon">
                                                        <BiSolidTrash className="text-light iconnn" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="padded-section-2">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="addddd p-2">
                                                <form className="form-layout">
                                                    <div className="form-group">
                                                        <label htmlFor="itemName" className='text-light'>Customization Name</label>
                                                        <input
                                                            type="text"
                                                            id="itemName"
                                                            placeholder="Enter Customization Name"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="itemIngredients" className='text-light'>Customization Detail</label>
                                                        <input
                                                            type="text"
                                                            id="itemIngredients"
                                                            placeholder="Enter Customization Detail"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="itemIngredients" className='text-light'>Extra Rate</label>
                                                        <input
                                                            type="number"
                                                            id="itemIngredients"
                                                            placeholder="Enter Extra Rate"
                                                            className="form-control border-0"
                                                            style={{ background: " rgba(45, 48, 62, 1)" }}
                                                        />
                                                    </div>
                                                    <div className="step-icon">
                                                        <BiSolidTrash className="text-light iconnn" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btns mt-3 d-flex justify-content-end">
                            <button
                                className="btn-step3"
                                style={{
                                    padding: "8px 16px",
                                    backgroundColor: "rgb(202, 146, 61)",
                                    border: "none",
                                    borderRadius: "5px",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    marginRight: "10px",
                                }}
                            >
                                Add Step : 3
                            </button>
                            <button
                                className="btn-save"
                                style={{
                                    padding: "8px 16px",
                                    backgroundColor: "#28a745",
                                    border: "none",
                                    borderRadius: "5px",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                }}
                            >
                                Save
                            </button>
                        </div> */}

                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddFood;
