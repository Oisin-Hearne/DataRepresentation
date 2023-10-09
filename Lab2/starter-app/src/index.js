import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeaderC from './components/HeaderC';
import ContentC from './components/ContentC';
import FooterC from './components/FooterC';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {Link} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="home">Navbar</Navbar.Brand>
      <Nav classname="me-auto">
      <BrowserRouter>
      <Routes>
          <Route exact path="/header" element={<HeaderC/>}>Header</Route>
          <Route exact path="/footer" element={<FooterC/>}>Footer</Route>
          <Route exact path="/home" element={<ContentC/>}>Home</Route>
      </Routes>
      </BrowserRouter>
      </Nav>
    </Container>
  </Navbar>

    <ContentC/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
