import React from 'react';
import './App.css';
import Nav from './components/Nav';
// import Header from './components/Header';
// import BookingForm from './components/BookingForm';
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
 
    <div>
      <Nav/>
      <Main/>
      <Menu />
      <Footer/>
      {/* <Header/>
      <BookingForm /> */}
    </div>
  );
}

export default App;
