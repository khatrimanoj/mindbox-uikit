import React from 'react';

    const colorVariant = (props) => 
    { 
        return (
            <div className="col-md-4 mb-30">
            <div className={["variantbox align-content-end " + props.class]}>
            <div className="caption text-white">{props.colorcode}</div>
                <div className="h5 text-white">
                {props.title}
                </div>
            </div>
            </div>
        );
      
    }

export default colorVariant;