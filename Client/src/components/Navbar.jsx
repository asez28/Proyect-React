import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { MDBBtn } from "mdb-react-ui-kit";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import ImgUser from "./imgenUsuario";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#181025' : '#e3f2fd'};
  color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'};
}
`;

const Navbar = ({ theme, toggleTheme }) => {
  const { user } = useUserContext();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <nav className="navbar sticky-top" style={{ backgroundColor: theme.mode === 'dark' ? '#000000' : '#1478B9', color: theme.mode === 'dark' ? '#EEE' : '#111' }}>
      <div className="container">
        <img className="logo" src="https://my-moments.com/wp-content/uploads/2018/07/MyMoMents-Logo.png"/>
        <NavLink to="/" className="btn btn-primary">
          Home
        </NavLink>
        {user && (
          <>
            <NavLink to="/edit-card" className="btn btn-primary">
              Edit Card
            </NavLink>
            <NavLink to="/info-user" className="btn btn-primary">
              User Info
            </NavLink>
          <ImgUser/>

            <MDBBtn rounded className="mx-2" color="danger" onClick={handleLogout}>
              Log Out
            </MDBBtn>
          </>
        )}
        <MDBBtn className="btn btn-outline-dark bi bi-brightness-high text-light" onClick={toggleTheme}>Mode</MDBBtn>
      </div>
    </nav>
    </ThemeProvider>
  );
};

export default Navbar;
