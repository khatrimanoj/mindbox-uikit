import React from 'react';

const heading = (props) => 
{ 
        return (
            <div className="row mb-30 w-100"> 
              
                <div className="col-md-3"><span className="h6">{props.title}</span></div>
                <div className="col-md-9"><p className={props.class}>{props.content}</p></div>
           </div>
        ); 
   
}

export default heading;

