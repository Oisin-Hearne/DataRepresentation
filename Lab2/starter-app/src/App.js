import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderC from './components/HeaderC.js';
import FooterC from './components/FooterC.js';
import ContentC from './components/ContentC.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderC />, <ContentC/>, <FooterC/>);
//root.render(<ContentC />);
//root.render(<FooterC />);

function App() {
  return(
    <div className="App"></div>

  );
}

export default App;
