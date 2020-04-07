import React, { Component } from 'react';
import AvitarIcon from '../../../../images/avitar.png' 
class avitar_icon extends Component {
    render() {
        return (
            <>
              <ul class="btn-list">
                        <li>
                           <div className="xs-avitar avitar ">
                               <img className="round" src={AvitarIcon} />
                           </div>
                       </li>
                       <li>
                           <div className="sm-avitar avitar ">
                               <img className="round" src={AvitarIcon} />
                           </div>
                       </li> 
                        <li>
                           <div className="md-avitar avitar ">
                               <img className="round" src={AvitarIcon} />
                           </div>
                       </li>
                       <li>
                           <div className="avitar ">
                               <img className="round" src={AvitarIcon} />
                           </div>
                       </li>
                    </ul>

                    <div className="w-100 pull-left mb-30"></div>

                    <ul class="btn-list">
                        <li>
                           <div className="xs-avitar avitar ">
                                 <span className="round bg-disy-bush text-white">B</span>
                           </div>
                       </li>
                       <li>
                           <div className="sm-avitar avitar ">
                                 <span className="round bg-orange text-white">BS</span>
                           </div>
                       </li> 
                        <li>
                           <div className="md-avitar avitar ">
                                 <span className="round bg-yellow ">BS</span>
                           </div>
                       </li>
                       <li>
                           <div className="avitar ">
                                 <span className="round bg-primary text-white">BS</span>
                           </div>
                       </li>
                    </ul>

                    <div className="w-100 pull-left mb-30"></div>

                    <ul class="btn-list">
                        <li>
                           <div className="xs-avitar avitar squear-avitar">
                               <img className="" src={AvitarIcon} />
                           </div>
                       </li>
                       <li>
                           <div className="sm-avitar avitar squear-avitar">
                               <img className="" src={AvitarIcon} />
                           </div>
                       </li> 
                        <li>
                           <div className="md-avitar avitar squear-avitar">
                               <img className="" src={AvitarIcon} />
                           </div>
                       </li>
                       <li>
                           <div className="avitar squear-avitar">
                               <img className="" src={AvitarIcon} />
                           </div>
                       </li>
                    </ul>

                    <div className="w-100 pull-left mb-30"></div>

                    <ul class="btn-list">
                        <li>
                           <div className="xs-avitar avitar squear-avitar">
                                 <span className=" bg-disy-bush text-white">B</span>
                           </div>
                       </li>
                       <li>
                           <div className="sm-avitar avitar squear-avitar">
                                 <span className=" bg-orange text-white">BS</span>
                           </div>
                       </li> 
                        <li>
                           <div className="md-avitar avitar squear-avitar">
                                 <span className=" bg-yellow ">BS</span>
                           </div>
                       </li>
                       <li>
                           <div className="avitar squear-avitar">
                                 <span className=" bg-primary text-white">BS</span>
                           </div>
                       </li>
                    </ul>  
            </>
        );
    }
}

export default avitar_icon;