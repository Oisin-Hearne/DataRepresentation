import React from 'react';

class ContentC extends React.Component {
    render() {
      return <div><header> <h1>Hello World!</h1><h2>It is {new Date().toLocaleTimeString()}.</h2></header></div>;
    }
}

export default ContentC;