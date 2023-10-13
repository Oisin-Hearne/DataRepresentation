import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Read from './components/Read';
import ContentC from './components/ContentC';
import Create from './components/Create';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  NavLink,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="home">Navbar</Navbar.Brand>
      <Nav classname="me-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="Read">Read</Nav.Link>
      <Nav.Link href="Create">Create</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  <Routes>
        <Route path="Create" element={<Create/>}></Route>
        <Route path="Read" element={<Read/>}></Route>
        <Route path="home" element={<ContentC/>}></Route>
  </Routes>
      </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
