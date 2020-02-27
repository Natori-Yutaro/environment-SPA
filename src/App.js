import React, { Component } from 'react';
import Header from "./component/Header";
import Intro from "./component/Intro";
import Result from "./component/Result";
import Teian from "./component/Teian";
import Profile from "./component/Profile";
import Footer from "./component/Footer";

// library.add(brands, faCheckSquare, faCoffee, faStar, faCalendarTimes);

class App extends Component {

  render() {
    return (
      <div className="App container">
        <Header />
        <Intro />
        <Result />
        <Teian />
        <Profile />
        <Footer />
      </div>
    );
  }
}


export default App;
