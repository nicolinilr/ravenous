import React from 'react';
import './Business.css'

export class Business extends React.Component {
    
    render(){
        
        const googleAdd = this.props.business.address ? this.props.business.address.replace(/\s/g, '+') : '';
        const googleCity = this.props.business.city ? this.props.business.city.replace(/\s/g, '+') : '';
        const googleState = this.props.business.state ? this.props.business.state.replace(/\s/g, '+') : '';

        
        return (
            <div className="Business">
  <div className="image-container">
      <a href={this.props.business.website} target="blank_">
    <img src={this.props.business.imageSrc} alt=''/>
      </a>
  </div>
  <h2>{this.props.business.name}</h2>
  <div className="Business-information">
    <a href={`https://www.google.com/maps/search/?api=1&query=${googleAdd}%2C+${googleCity}%2C+${googleState}`} target='blank_'>
    <div className="Business-address">
      <p>{this.props.business.address}</p>
      <p>{this.props.business.city}</p>
      <p>{this.props.business.state} {this.props.business.zipCode}</p>
    </div>
    </a>

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

//export default Business;