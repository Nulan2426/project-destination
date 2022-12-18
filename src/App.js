import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homepage from "./Components/homepage"
import MapView from './Components/map';
import SiteReview from './Components/review';
import SearchBar from './Components/searchbar';



function App() {
  return (
    <div className="App">

      <Homepage />
  

      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/MapView" component={MapView} />
        <Route path="/SiteReview" component={SiteReview} />
        <Route path="/SearchBar" component={SearchBar} />
      </Router>
    </div>
  );
}

export default App;
