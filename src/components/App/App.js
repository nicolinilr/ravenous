import React from 'react';
import './App.css';
//import logo from './logo.svg';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';

export class Business extends React.Component {
  render(){
      return (
          <div className="Business">
<div className="image-container">
  <img src={this.props.business.src} alt=''/>
</div>
<h2>{this.props.business.name}</h2>
<div className="Business-information">
  <div className="Business-address">
    <p>{this.props.business.address}</p>
    <p>{this.props.business.city}</p>
    <p>{this.props.business.state} {this.props.business.zipCode}</p>
  </div>
  <div className="Business-reviews">
    <h3>{this.props.business.category}</h3>
    <h3 className="rating">{this.props.business.rating}</h3>
    <p>{this.props.business.reviewCount}</p>
  </div>
</div>
</div>
      );
  };
};
const businesses = [<Business />,<Business />,<Business />,<Business />,<Business />,<Business />];
function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
