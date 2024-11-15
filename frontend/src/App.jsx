import React from 'react';
import Sidebar from './component/sidebar/sidebar';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Menu from './component/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
      </div>
      <Header />
      {/* <Dashboard /> */}
      <Menu/>
    </>
  );
};

export default App;
