import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {chevronRight} from 'react-icons-kit/feather/chevronRight';
import {mediaRecord} from 'react-icons-kit/typicons/mediaRecord'
class breadcrumbs extends Component {
    
    render() {
        var dotstyle = {
            color: 'var(--light-gray)',
            fontSize: '12px'
          };
        return (
            <>
                 <div className="col-md-6">
                     <ul className="breadcrumbs">
                         <li className="active">
                             <a className="text-primary">Home</a>
                         </li>
                         <li className="active">
                             /
                         </li>
                         <li className="active">
                             <a className="text-primary">Electronics</a>
                         </li>
                         <li className="active">
                             /
                         </li>
                         <li className="active">
                             <a className="text-primary">Headphones</a>
                         </li>
                         <li>
                             /
                         </li>
                         <li>
                             <a>Premium Headphones</a>
                         </li>

                     </ul>

                     <div className="w-100 mb-30 pull-left"></div>

                     <ul className="breadcrumbs breadcrumbs-lg">
                         <li>
                             <a className="text-primary">Home</a>
                         </li>
                         <li>
                             <Icon  icon={chevronRight} size={20} />
                         </li>
                         <li>
                             <a className="text-primary">Introduction</a>
                         </li>
                         <li>
                             <Icon  icon={chevronRight} size={20} />
                         </li>
                         <li >
                             <a className="">Solutions</a>
                         </li>
                        

                     </ul>
                 </div>
                 <div className="col-md-6">

                 <ul className="breadcrumbs">
                         <li className="active">
                             <a className="text-primary">Home</a>
                         </li>
                         <li className="active">
                             <Icon icon={chevronRight} size={20} />
                         </li>
                         <li className="active">
                             <a className="text-primary">Electronics</a>
                         </li>
                         <li className="active">
                             <Icon icon={chevronRight} size={20} />
                         </li>
                         <li className="active">
                             <a className="text-primary">Headphones</a>
                         </li>
                         <li>
                             <Icon icon={chevronRight} size={20} />
                         </li>
                         <li>
                             <a>Premium Headphones</a>
                         </li>

                     </ul>

                     <div className="w-100 mb-30 pull-left"></div>

                     <ul className="breadcrumbs breadcrumbs-lg">
                         <li>
                             <a>Home</a>
                         </li>
                         <li>
                             <Icon icon={mediaRecord} size={12} style={dotstyle} />
                         </li>
                         <li>
                             <a>Introduction</a>
                         </li>
                         <li>
                             <Icon icon={mediaRecord} size={12} style={dotstyle} />
                         </li>
                         <li >
                             <a className="">Solutions</a>
                         </li>
                        

                     </ul>
                     <div className="w-100 mb-70 pull-left"></div>


                 </div> 
            </>
        );
    }
}

export default breadcrumbs;