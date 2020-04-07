import React from 'react';

const colorbtn = (props) => 
{ 
        return (
            <div className="col-md-2 mb-30"> 
              <button className={["btn w-100 btn-sm " + props.class]}>{props.colorname}</button>
           </div>
        ); 
   
}

export default colorbtn;
