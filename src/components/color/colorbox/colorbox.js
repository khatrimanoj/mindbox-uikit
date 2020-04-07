import React from 'react';

const colorbox = (props) => 
{ 

        
    
        return (
            <>
            <div className="col-md-4 ">
                <div className={["colorbox align-content-end " + props.class]}>
                    <div className="caption text-white">{props.colorcode}</div>
                    <div className="h5 text-white">{props.title}</div>
                </div>
             
             </div>
         
             
              </>
        ); 
   
}

export default colorbox;