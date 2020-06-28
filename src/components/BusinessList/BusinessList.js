import React from 'react'

import './BusinessList.css';
import  Bussines from '../Business/Business'


class BusinessList extends React.Component{
    render(){
        return (<div class="BusinessList">
              {
                this.props.businesses.map(business => {
                    return <Bussines business={business} />
                })
             }
            
            </div>)

    }
}
export default  BusinessList;

