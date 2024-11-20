import React from 'react';
import Sidebar from './component/sidebar/sidebar';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Menu from './component/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddFoodItem from './component/AddFoodItem/AddFoodItem';
import QrScan from './component/QrScan/QrScan';
import CreateQrScan from './component/CreateQrScan/CreateQrScan';



const App = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
      </div>
      <Header />
      {/* <Dashboard /> */}
      {/* <Menu/> */}
      {/* <AddFoodItem/> */}
      {/* <QrScan /> */}
      <CreateQrScan />
    </>
  );
};

export default App;
