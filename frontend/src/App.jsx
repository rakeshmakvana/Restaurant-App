import React from 'react';
import Sidebar from './component/sidebar/sidebar';
import Header from './component/Header/Header';
// import Dashboard from './component/Dashboard/Dashboard';
import ParcelOrderTable from "./component/ParcelOrderTable.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
      </div>
      <Header />
      {/* <Dashboard /> */}
      <ParcelOrderTable />
    </>
  );
};

export default App;
