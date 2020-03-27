import React, { Component } from 'react';
import AvitarIcon from '../../../../images/avitar.png';
import { Icon } from 'react-icons-kit';
import {chevronDown} from 'react-icons-kit/feather/chevronDown'


class avitar_dropdown extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-md-3">
                 <div className="avitar-dropdown">
                    <div className="row align-items-center">
                       <div className="col-md-3">
                            <div className="sm-avitar avitar ">
                               <img className="round" src={AvitarIcon} />
                           </div>
                       </div>
                       <div className="col-md-9">
                             <div className="body2">Benjamin Parker</div>
                             <p className="text-gray caption">Developer</p>
                       </div>
                    </div>
                 </div>
                
            </div>
             <div className="col-md-3">
                <div className="avitar-dropdown">
                    <div className="row align-items-center">
                    <div className="col-md-3">
                            <div className="md-avitar avitar ">
                            <img className="round" src={AvitarIcon} />
                        </div>
                    </div>
                    <div className="col-md-9">
                            <div className="body1">Benjamin Parker</div>
                            <p className="text-gray caption">Developer</p>
                    </div>
                    </div>
                </div>
            
             </div>
             <div className="col-md-3">
                 <div className="avitar-dropdown">
                    <div className="row align-items-center">
                       <div className="col-md-3">
                            <div className="sm-avitar avitar ">
                               <img className="round" src={AvitarIcon} />
                           </div>
                       </div>
                       <div className="col-md-7">
                             <div className="body2">Benjamin Parker</div>
                       </div>
                       <div className="col-md-2">
                             <Icon icon={chevronDown} size={12}  />
                       </div>
                    </div>
                 </div>
                
            </div>
            <div className="col-md-3">
                <div className="avitar-dropdown">
                    <div className="row no-gutters align-items-center">
                    <div className="col-md-3">
                            <div className="md-avitar avitar ">
                            <img className="round" src={AvitarIcon} />
                        </div>
                    </div>
                    <div className="col-md-7">
                            <div className="body1">Benjamin Parker</div>
                    </div>
                    <div className="col-md-2">
                             <Icon icon={chevronDown} size={12}  />
                       </div>
                    </div>
                </div>
            
             </div>

             <div className="w-100 pull-left mb-50"></div>


             <div className="col-md-3">
                 <div className="avitar-dropdown">
                    <div className="row align-items-center">
                       <div className="col-md-3">
                            <div className="sm-avitar avitar ">
                               <img className="" src={AvitarIcon} />
                           </div>
                       </div>
                       <div className="col-md-9">
                             <div className="body2">Benjamin Parker</div>
                             <p className="text-gray caption">Developer</p>
                       </div>
                    </div>
                 </div>
                
            </div>
             <div className="col-md-3">
                <div className="avitar-dropdown">
                    <div className="row align-items-center">
                    <div className="col-md-3">
                            <div className="md-avitar avitar ">
                            <img className="" src={AvitarIcon} />
                        </div>
                    </div>
                    <div className="col-md-9">
                            <div className="body1">Benjamin Parker</div>
                            <p className="text-gray caption">Developer</p>
                    </div>
                    </div>
                </div>
            
             </div>
             <div className="col-md-3">
                 <div className="avitar-dropdown">
                    <div className="row align-items-center">
                       <div className="col-md-3">
                            <div className="sm-avitar avitar ">
                               <img className="" src={AvitarIcon} />
                           </div>
                       </div>
                       <div className="col-md-7">
                             <div className="body2">Benjamin Parker</div>
                       </div>
                       <div className="col-md-2">
                             <Icon icon={chevronDown} size={12}  />
                       </div>
                    </div>
                 </div>
                
            </div>
            <div className="col-md-3">
                <div className="avitar-dropdown">
                    <div className="row no-gutters align-items-center">
                    <div className="col-md-3">
                            <div className="md-avitar avitar ">
                            <img className="" src={AvitarIcon} />
                        </div>
                    </div>
                    <div className="col-md-7">
                            <div className="body1">Benjamin Parker</div>
                    </div>
                    <div className="col-md-2">
                             <Icon icon={chevronDown} size={12}  />
                       </div>
                    </div>
                </div>
            
             </div>
             </div>
        );
    }
}

export default avitar_dropdown;