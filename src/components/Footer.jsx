import React from "react";
import { createGlobalStyle } from 'styled-components';

const FooterStyle = createGlobalStyle`
  footer {
    background-color: ${props => props.theme.mode === 'dark' ? '#000000' : 'white'};
    color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'};
  }
`;

const Footer = () => {
  return (
    <FooterStyle />
  );
};

export default Footer;
