import React, { Component } from 'react';
import Logo from '../../images/mindbox.svg'

const header = (props) => 
{
    
    return(
        <div className="container">
          <div className="row">
          <div className="header"  >
            <div className="pull-left title">{props.header}</div>
            <div className="pull-right logo"> <img src={Logo}/></div>
          </div>
        </div>
       
     </div>
    );
    
}
export default header;