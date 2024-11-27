import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Forgotpassword from "./components/Forgotpassword"
import Login from "./components/login"
import Otpemail from "./components/Otpemail"
import Register from "./components/register"
import Resetpassword from "./components/Resetpassword"
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Menu from "./components/Menu";
import AddFood from "./components/Addfood";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/register" element={<Register setIsAuth={setIsAuth} />} />
        <Route path="/forgotpassword" element={<Forgotpassword setIsAuth={setIsAuth} />} />
        <Route path="/otpemail" element={<Otpemail setIsAuth={setIsAuth} />} />
        <Route path="/resetpassword" element={<Resetpassword setIsAuth={setIsAuth} />} />
        <Route
          path="/"
          element={
            isAuth == true ? <><Sidebar /><Header /><Dashboard /></> : <Navigate to="/login" />
          }
        />
        <Route
          path="/profile"
          element={
            isAuth == true ? <><Sidebar /><Header /><Profile /></> : <Navigate to="/login" />
          }
        />
        <Route
          path="/menu"
          element={
            isAuth == true ? <><Sidebar /><Header /><Menu /></> : <Navigate to="/login" />
          }
        />
        <Route
          path="/addfood"
          element={
            isAuth == true ? <><Sidebar /><Header /><AddFood /></> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
