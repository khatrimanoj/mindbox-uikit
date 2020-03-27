import React from 'react';

    const addtionalcolor = (props) => 
    { 
       
        return (
           <div className="col-md-2 mb-30">
               <div className={["addtional-color align-content-end " + props.class]}>
               <div className="caption text-white">{props.colorcode}</div>
               <div className="h6 text-white">{props.title}</div>
               </div>
             
           </div>
        );
      
    }

export default addtionalcolor;