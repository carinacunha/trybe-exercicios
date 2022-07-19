import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Content />
        <Footer />
      </main>
    
    )
  }
}

export default App;
