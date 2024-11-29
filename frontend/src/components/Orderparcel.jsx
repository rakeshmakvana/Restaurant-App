import React, { useState } from "react";
import { Table, Modal, Badge, Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import "../styles/orderparcel.css";

const OrderParcel = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="page-wrapper">
      <div className="container">
        <span className="nav nav-tabs justify-content-center mb-4 new-class">
          <a
            className={`nav-link ${activeTab === "tab1" ? "active-tab" : "inactive-tab"}`}
            onClick={() => setActiveTab("tab1")}
            href="#"
          >
            Request For Payment
          </a>
          <a
            className={`nav-link ${activeTab === "tab2" ? "active-tab" : "inactive-tab"}`}
            onClick={() => setActiveTab("tab2")}
            href="#"
          >
            In Progress
          </a>
          <a
            className={`nav-link ${activeTab === "tab3" ? "active-tab" : "inactive-tab"}`}
            onClick={() => setActiveTab("tab3")}
            href="#"
          >
            Delivered
          </a>
        </span>

        {/* Content for each tab */}
        <div className="flex-grow-1">
          {activeTab === "tab1" && <RequestForPayment />}
          {activeTab === "tab2" && <InProgress />}
          {activeTab === "tab3" && <Delivered />}
        </div>
      </div>
    </div>
  );
};

const RequestForPayment = () => (
  /**
   * Component to render a table of parcel orders which require payment
   */
  <div className="container mt-4">
    <h4 className="text-center">
    </h4>
    {/* TODO: Add a title to the page */}
    <div className="table-responsive container mt-4 parcel-order-table">
      <h4 className="mt-3 parcel-order">Parcel Order</h4>
      <Table responsive bordered hover className="mt-2 table-header-responsive">
        <thead>
          <tr className="table-header">
            <th>Customer Name</th>
            <th>Items Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Customer Phone</th>
            <th>Quantity</th>
            <th>Total Bill</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Davis Lipshutz</td>
            <td>Rice</td>
            <td>11/02/2024</td>
            <div className='time' style={{ textAlign: "center" }}>
              {/* Center the time column with a div */}
              <td>
                <Badge bg="secondary">3:45 PM</Badge>
                {/* Use a badge to highlight the time */}
              </td>
            </div>
            <td className='number'>98568 85214</td>
            <td className='quantity'>500 G.M</td>
            {/* Use a class to style the quantity column */}
            <div className='bill' style={{ color: "green" }}>
              <td>₹ 500</td>
            </div>
            <td className='main-action'>
              <Button size="sm" className="me-2 action-1">
                ✔
              </Button>
              <Button size="sm" className="me-2 action-2">
                ✘
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
);

const InProgress = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (data) => {
    console.log("Opening Modal with data:", data);
    setModalData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const tableData = [
    {
      customerName: "Davis Lipshutz",
      itemsName: "Rice",
      date: "11/02/2024",
      time: "3:45 PM",
      customerPhone: "98568 85214",
      quantity: "500 G.M",
      totalBill: "₹ 500",
    },
    {
      customerName: "John Doe",
      itemsName: "Wheat",
      date: "12/02/2024",
      time: "4:15 PM",
      customerPhone: "98765 43210",
      quantity: "1 KG",
      totalBill: "₹ 800",
    },
  ];

  return (
    <div className="container mt-4">
      <h4 className="text-center"></h4>
      <div className="table-responsive container mt-4 parcel-order-table">
        <h4 className="mt-3 parcel-order">Parcel Order</h4>
        <Table responsive bordered hover className="mt-2 table-header-responsive">
          <thead>
            <tr className="table-header">
              <th>Customer Name</th>
              <th>Items Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Customer Phone</th>
              <th>Quantity</th>
              <th>Total Bill</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.customerName}</td>
                <td>{row.itemsName}</td>
                <td>{row.date}</td>
                <div className='time'>
                  <td>
                    <Badge bg="secondary">{row.time}</Badge>
                  </td>
                </div>
                <td className='number'>{row.customerPhone}</td>
                <td className="quantity">{row.quantity}</td>
                <div className='bill' style={{ color: "green" }}>
                  <td>{row.totalBill}</td>
                </div>
                <td>
                  <button
                    className="custom-background"
                    onClick={() => {
                      handleOpenModal(row);
                    }}
                  >
                    <FaEye style={{ color: "#5678E9", fontSize: "1.2rem" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Customer Name:</strong> {modalData.customerName}
          </p>
          <p>
            <strong>Items Name:</strong> {modalData.itemsName}
          </p>
          <p>
            <strong>Date:</strong> {modalData.date}
          </p>
          <p>
            <strong>Time:</strong> {modalData.time}
          </p>
          <p>
            <strong>Customer Phone:</strong> {modalData.customerPhone}
          </p>
          <p>
            <strong>Quantity:</strong> {modalData.quantity}
          </p>
          <p>
            <strong>Total Bill:</strong> {modalData.totalBill}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Delivered = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const tableData = [
    {
      customerName: "Davis Lipshutz",
      itemsName: "Rice",
      date: "11/02/2024",
      time: "3:45 PM",
      customerPhone: "98568 85214",
      quantity: "500 G.M",
      totalBill: "₹ 500",
    },
  ];

  return (
    <div className="container mt-4">
      <h4 className="text-center"></h4>
      <div className="table-responsive container mt-4 parcel-order-table">
        <h4 className="mt-3 parcel-order">Parcel Order</h4>
        <Table responsive bordered hover className="mt-2 table-header-responsive">
          <thead>
            <tr className="table-header">
              <th>Customer Name</th>
              <th>Items Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Customer Phone</th>
              <th>Quantity</th>
              <th>Total Bill</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.customerName}</td>
                <td>{row.itemsName}</td>
                <td>{row.date}</td>
                <div className='time'>
                  <td>
                    <Badge bg="secondary">{row.time}</Badge>
                  </td>
                </div>
                <td className='number'>{row.customerPhone}</td>
                <td className="quantity">{row.quantity}</td>
                <div className='bill' style={{ color: "green" }}>
                  <td>{row.totalBill}</td>
                </div>
                <td>
                  <button
                    className="custom-background"
                    onClick={() => {
                      handleOpenModal(row);
                    }}
                  >
                    <FaEye style={{ color: "#5678E9", fontSize: "1.2rem" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Customer Name:</strong> {modalData.customerName}
          </p>
          <p>
            <strong>Items Name:</strong> {modalData.itemsName}
          </p>
          <p>
            <strong>Date:</strong> {modalData.date}
          </p>
          <p>
            <strong>Time:</strong> {modalData.time}
          </p>
          <p>
            <strong>Customer Phone:</strong> {modalData.customerPhone}
          </p>
          <p>
            <strong>Quantity:</strong> {modalData.quantity}
          </p>
          <p>
            <strong>Total Bill:</strong> {modalData.totalBill}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderParcel;