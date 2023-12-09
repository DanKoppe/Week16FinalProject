import React, { Component } from "react"; // importing react libary, components class from react module
import { // importing react router dependencies
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./components/Header.jsx"; // importing needed components
import { Home } from "./components/pages/Home.jsx";
import { About } from "./components/pages/About.jsx";
import { ContactUs } from "./components/pages/ContactUs.jsx";
import { Footer } from "./components/Footer.jsx";
import "./App.css"; //importing css file for styling

class App extends Component {
  //creating react component class called App
  render() {
    //calling the render method and returning a div wrapped in the react router component enabling routing functionality. Routes for our 3 main pages within our Header and Footer components. 
    return ( 
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactUs" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App; //exporting the app component to be used on the index.js file

