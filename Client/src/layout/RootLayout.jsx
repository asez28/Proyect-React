import { Link, Outlet } from "react-router-dom";
import UserContextProvider from "../context/UserContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from 'styled-components';
import { useState } from "react";

const Root = () => {
  const [theme, setTheme] = useState({ mode: 'light' });

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      mode: prevTheme.mode === 'dark' ? 'light' : 'dark'
    }));
  };

  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Outlet />
        <Footer />
        <footer className="footer1 container mt-4">
          <div className="d-flex justify-content-center">
            <Link className="m-2 bi bi-person-badge-fill" to="./info-user">Info</Link>
            <Link className="m-2 bi bi-postcard" to="/create-form"> Create</Link>
            <Link className="bi bi-info-circle-fill m-2" to="/about"> About</Link>
          </div>
        </footer>
      </ThemeProvider>
    </UserContextProvider>
  );
};

export default Root;
