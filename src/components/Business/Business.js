import React from 'react';
import './Business.css';


//<img src={business.imageSrc} alt=''/>
class Business extends React.Component{
    render(){
        return (<div class="Business">
                <div class="image-container">
                <img src={this.props.business.imageSrc} alt=''/>
                </div>
                <h2>{this.props.business.name}</h2>
                <div class="Business-information">
                    <div class="Business-address">
                    <p>{this.props.business.address}</p>
                    <p>{this.props.business.city}</p>
                    <p>{this.props.business.state} {this.props.business.zipCode}</p>
                    </div>
                    <div class="Business-reviews">
                        <h3>{this.props.business.category}</h3>
                    <h3 class="rating">{this.props.business.rating} stars</h3>
                    <p>{this.props.business.reviewCount}</p>
                    </div>
                </div>
            </div>);
    }
}

export default Business;