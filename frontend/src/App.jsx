import React from 'react';
import Sidebar from './component/sidebar/sidebar';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';


const App = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
      </div>
      <Header />
      <Dashboard />
    </>
  );
};

export default App;
