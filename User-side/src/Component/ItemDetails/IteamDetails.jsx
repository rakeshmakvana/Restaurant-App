import React, { useState } from "react";
import "./ItemDetails.css";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const ItemDetails = () => {
    const [counter, setCounter] = useState(1);
    const [steps, setSteps] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({
        crust: "",
        size: "",
        toppings: [],
    });

    const incrementCounter = () => setCounter((prev) => prev + 1);
    const decrementCounter = () => setCounter((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => setSteps(1);
    const handleNextStep = () => setSteps((prev) => prev + 1);
    const handleClose = () => setSteps(0);

    const handleOptionSelect = (stepName, optionValue) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [stepName]: stepName === "toppings"
                ? prev.toppings.includes(optionValue)
                    ? prev.toppings.filter((item) => item !== optionValue)
                    : [...prev.toppings, optionValue]
                : optionValue,
        }));
    };


return (
    <>
        <Container
            fluid
            className="Iteam-details-container text-light py-4"
            style={{ backgroundColor: "#1f1d2b", maxWidth: "100%" }}
        >
            <Row className="align-items-center mb-4">
                <Col xs={2} md={1} className="text-start">
                    <MdOutlineKeyboardArrowLeft className="text-light" />
                </Col>
                <Col xs={8} md={10} className="text-center">
                    <h5 className="mb-0 ms-auto">Item Details</h5>
                </Col>
                <Col xs={2} md={1} className="text-end">
                    <i
                        className="bi bi-three-dots-vertical text-light"
                        style={{ fontSize: "20px" }}
                    ></i>
                </Col>
            </Row>

            <Row className="justify-content-center mb-4">
                <Col xs={10} md={6} className="text-center">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/ecd2/40ce/7c550720ab20af0840548a832e0f9a28?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QYSqGb1ASbnbXKdlzTDMDbwviGzxD3H6QADIR80588J3-aKlHblv2G0ODhgKJbasyDs3rWsJ-nUJ1cB9eL5gOXIyHdPQC4fwl2GZe55bd~aHtvyTa63n57~jJ0PVC5bqn3ClheFRQzi6VdoJTyUcM3~m2amhDVA5oVMNj-DvTZ99QIXtrdXFSIPM~bxSjnRowjv96bnoRn~wUyY04oAgwBKtQy~YINjbn9yWUgGaoUMpcNTI3REB5zefYl-w9LYIk0741aCEIB0HBn4RWCPT1W9lOQOn9HpHNUTeS6jwj~XTjCxAlG-VgMaTo-JbZkpAfGZf6qBSo-BgfUIyTx8hDw__"
                        alt="Maharaja Burger"
                        className="img-fluid rounded-circle"
                        width={250}
                    />
                </Col>
            </Row>

            <Card
                className="text-dark"
                style={{ backgroundColor: "#2d303e", borderRadius: "15px" }}
            >
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <Button
                            variant="outline-light"
                            size="sm"
                            className="p-2"
                            style={{
                                borderRadius: "35px",
                                background: "rgba(255, 255, 255, 0.3)",
                            }}
                        >
                            Customization
                        </Button>
                        <span
                            className="badge bg-success p-3"
                            style={{ borderRadius: "35px", fontSize: "20px" }}
                        >
                            Veg
                        </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0 text-light">Maharaja Burger</h5>
                        <span style={{ fontSize: "20px", color: "rgb(202, 146, 61)" }}>₹500</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="text-light mb-0">Details</p>
                        <div className="d-flex align-items-center counter">
                            <Button
                                variant="outline-light"
                                size="sm"
                                className="counter-btn"
                                style={{
                                    backgroundColor: "rgb(202, 146, 61)",
                                    color: "#fff",
                                }}
                                onClick={decrementCounter}
                            >
                                <FaMinus />
                            </Button>
                            <span className="mx-1 text-light counter-value">{counter}</span>
                            <Button
                                variant="outline-light"
                                size="sm"
                                className="counter-btn"
                                style={{
                                    backgroundColor: "rgb(202, 146, 61)",
                                    color: "#fff",
                                }}
                                onClick={incrementCounter}
                            >
                                <FaPlus />
                            </Button>
                        </div>
                    </div>
                    <p style={{ color: "#bbb", borderBottom: "#dee2e6" }}>
                        Ginger Garlic Noodle Soup With Bok Choy is a nutritious, comforting, and
                        flu-fighting twenty-minute recipe made with vegetarian broth, noodles,
                        mushrooms, and baby bok choy.
                    </p>
                    <p className="mb-2 text-light">Ingredients:</p>
                    <ol className="ps-3" style={{ color: "#bbb" }}>
                        <li>Tbsp olive oil</li>
                        <li>Shallots (diced)</li>
                        <li>Bunch green onion (chopped, green & white divided)</li>
                        <li>Cloves garlic (minced)</li>
                    </ol>
                    <Button
                        className="w-100 mt-3 text-dark add-to-cart-btn text-light border-0"
                        style={{
                            borderRadius: "10px",
                            backgroundColor: "rgb(202, 146, 61)",
                        }}
                        onClick={handleAddToCart}
                    >
                        Add To Cart
                    </Button>
                </Card.Body>
            </Card>
        </Container>

        <Modal show={steps > 0} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{`Step ${steps} / 3`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {steps === 1 && (
                    <>
                        <h5>Select Crust</h5>
                        <div className="crust-selection">
                            {["Wheat Crust", "Cheese Burst", "Pan Pizza", "Hand Tossed"].map((crust, idx) => (
                                <Button
                                    key={idx}
                                    className={selectedOptions.crust === crust ? "btn-primary" : "btn-outline-secondary"}
                                    onClick={() => handleOptionSelect("crust", crust)}
                                >
                                    {crust}
                                </Button>
                            ))}
                        </div>

                    </>
                )}
                {steps === 2 && (
                    <>
                        <h5>Select Size</h5>
                        <div className="size-selection">
                            {["Medium - ₹200", "Large - ₹700", "Regular - ₹300"].map((size, idx) => (
                                <Button
                                    key={idx}
                                    className={selectedOptions.size === size ? "btn-primary" : "btn-outline-secondary"}
                                    onClick={() => handleOptionSelect("size", size)}
                                >
                                    {size}
                                </Button>
                            ))}
                        </div>

                    </>
                )}
                {steps === 3 && (
                    <>
                        <h5>Select Toppings</h5>
                        <div className="toppings-selection">
                            {["Jalapeno", "Onion", "Black Olive"].map((topping, idx) => (
                                <Button
                                    key={idx}
                                    className={
                                        selectedOptions.toppings.includes(topping)
                                            ? "btn-primary"
                                            : "btn-outline-secondary"
                                    }
                                    onClick={() => handleOptionSelect("toppings", topping)}
                                >
                                    {topping}
                                </Button>
                            ))}
                        </div>

                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                {steps < 3 && (
                    <Button variant="primary" onClick={handleNextStep}>
                        Continue
                    </Button>
                )}
                {steps === 3 && (
                    <Button variant="success" onClick={handleClose}>
                        Add to Cart
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    </>
);
};

export default ItemDetails;
