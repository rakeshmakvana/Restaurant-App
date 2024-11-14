import React from 'react';
import Sidebar from './component/sidebar/sidebar';
import Header from './component/Header/Header';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
      </div>
      <Header />
      <div className="App">
        <Profile />
      </div>
    </>
  );
};

export default App;
