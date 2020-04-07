import React from 'react';

    const shadow = (props) => 
    { 
        return (
           <div className="col-md-2 mb-30">
               <div className={["addtional-color align-content-end " + props.class]}>
               <div className="h6">{props.title}</div>
               </div>
             
           </div>
        );
      
    }

export default shadow;