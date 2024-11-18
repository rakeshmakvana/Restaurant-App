import React from 'react';
import './AddFoodItem.css';
import { BiSolidTrash } from 'react-icons/bi';

function AddFoodItem() {
    return (
        <>
            <div className="bg-addfood">
                <div className="page-wrapper">
                    <div className="content">
                        <div className="addfood mb-3">
                            <div className="row">
                                <div className="col-12">
                                    <div className="header-2">
                                        <h1 className="header-title text-light">Add Items</h1>
                                        <div className="header-buttons">
                                            <button className="veg-button">
                                                <span className="circle green-circle"></span> Veg
                                            </button>
                                            <button className="nonveg-button">
                                                <span className="circle red-circle"></span> Non-Veg
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="addfood">
                            <div className="padded-section">
                                <div className="row">
                                    <div className="col-12">
                                        <form className="form-layout">
                                            <div className="form-group">
                                                <label htmlFor="itemName" className='text-light'>Item Name</label>
                                                <input
                                                    type="text"
                                                    id="itemName"
                                                    placeholder="Enter item name"
                                                    className="form-control border-0"
                                                    style={{ background: " rgba(45, 48, 62, 1)" }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="itemIngredients" className='text-light'>Item Ingredients</label>
                                                <input
                                                    type="text"
                                                    id="itemIngredients"
                                                    placeholder="Enter item ingredients"
                                                    className="form-control border-0"
                                                    style={{ background: " rgba(45, 48, 62, 1)" }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="itemPrice" className='text-light'>Item Price</label>
                                                <input
                                                    type="number"
                                                    id="itemPrice"
                                                    placeholder="Enter item price"
                                                    className="form-control border-0"
                                                    style={{ background: " rgba(45, 48, 62, 1)" }}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <form className="form-layout">
                                            <div className="form-group">
                                                <label htmlFor="itemDiscount" className='text-light'>Add Discount</label>
                                                <input
                                                    type="text"
                                                    id="itemDiscount"
                                                    placeholder="Enter discount"
                                                    className="form-control border-0"
                                                    style={{ background: " rgba(45, 48, 62, 1)" }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="itemType" className='text-light' >Select Item Type</label>
                                                <select id="itemType" className="form-control border-0" style={{ background: " rgba(45, 48, 62, 1)" }}>
                                                    <option value="veg" className='text-light'>Veg</option>
                                                    <option value="nonveg" className='text-light'>Non-Veg</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className='text-light'>Spiciness Level</label>
                                                <div className="checkbox-group">
                                                    <label className='text-light'>
                                                        <input type="checkbox" value="lessSpicy" /> Less Spicy
                                                    </label >
                                                    <label className='text-light'>
                                                        <input type="checkbox" value="regular" /> Regular
                                                    </label>
                                                    <label className='text-light'>
                                                        <input type="checkbox" value="extra" /> Extra
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="image-drop-area border-0" style={{ background: " rgba(45, 48, 62, 1)" }}>
                                            <p className='text-light'>Drag and drop an image here or click to upload</p>
                                            <input type="file" className="file-input" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="checkbox-group pt-2 mb-3">
                            <label className='text-light'>
                                <input type="checkbox" value="lessSpicy" style={{ width: "15px", height: "15px" }} />Add Customization
                            </label >
                        </div>
                        {/* step1 */}
                        <div className="addfood mb-2">
                            <div className="padded-section">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className='text-light mb-2'>Step 1</h4>
                                        <div className="hea-3">
                                            <form className="form-layout pt-3">
                                                {/* Customization Title Input */}
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

                                                {/* Checkbox Group for Selection Type */}
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

                                            {/* Add Customization Button */}
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

                        {/* step2 */}
                        <div className="addfood">
                            <div className="padded-section">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className='text-light mb-2'>Step 2</h4>
                                        <div className="hea-3">
                                            <form className="form-layout pt-3">
                                                {/* Customization Title Input */}
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

                                                {/* Checkbox Group for Selection Type */}
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

                                            {/* Add Customization Button */}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddFoodItem;
