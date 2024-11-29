import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Forgotpassword from "./components/Forgotpassword";
import Login from "./components/Login";
import Otpemail from "./components/Otpemail";
import Register from "./components/Register";
import Resetpassword from "./components/Resetpassword";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Menu from "./components/Menu";
import AddFood from "./components/AddFood";
import OrderParcel from "./components/OrderParcel";
import Qrcode from "./components/Qrcode";
import AddQr from "./components/AddQr";
import Userlogin from "./components/Userlogin";
import Home from "./components/Home";
import TrendingMenu from "./components/TrendingMenu";
import Categories from "./components/Categorie";
import Search from "./components/Search";
import Item from "./components/Item";
import ItemDetails from "./components/ItemDetails";
import Cart from "./components/Cart";
import Payment from "./components/Payment";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    if (token && userRole) {
      setIsAuth(true);
      setRole(userRole);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const AdminRoutes = () => (
    <>
      <Route path="/" element={<><Sidebar /><Header /><Dashboard /></>} />
      <Route path="/profile" element={<><Sidebar /><Header /><Profile /></>} />
      <Route path="/menu" element={<><Sidebar /><Header /><Menu /></>} />
      <Route path="/addfood" element={<><Sidebar /><Header /><AddFood /></>} />
      <Route path="/orderparcel" element={<><Sidebar /><Header /><OrderParcel /></>} />
      <Route path="/qrcode" element={<><Sidebar /><Header /><Qrcode /></>} />
      <Route path="/addqr" element={<><Sidebar /><Header /><AddQr /></>} />
    </>
  );

  const UserRoutes = () => (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/trendingmenu" element={<TrendingMenu />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/search" element={<Search />} />
      <Route path="/item" element={<Item />} />
      <Route path="/itemdetails" element={<ItemDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/register" element={<Register setIsAuth={setIsAuth} />} />
        <Route path="/userlogin" element={<Userlogin setIsAuth={setIsAuth} />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/otpemail" element={<Otpemail />} />
        <Route path="/resetpassword" element={<Resetpassword />} />

        {isAuth && role === "admin" && AdminRoutes()}
        {isAuth && role === "user" && UserRoutes()}

        <Route
          path="*"
          element={
            isAuth
              ? role === "admin"
                ? <Navigate to="/" />
                : <Navigate to="/" />
              : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
