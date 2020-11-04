import React from 'react';
import './App.css';
//import logo from './logo.svg';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Yelp from '../../util/Yelp';


/*
const businesses = [<Business />,<Business />,<Business />,<Business />,<Business />,<Business />];
*/
class App extends React.Component {
  constructor(props){
    super(props);

    this.searchYelp=this.searchYelp.bind(this);
    this.state = {businesses:[]};

  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy)
    .then(
      businesses =>{
        this.setState({businesses: businesses});
      }
    );
  }

  render(){
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses={this.state.businesses}/>
    </div>
  );
  }
}

export default App;
