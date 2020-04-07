import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {chevronRight} from 'react-icons-kit/feather/chevronRight';
import {chevronLeft} from 'react-icons-kit/feather/chevronLeft'



class pagination extends Component {
    render() {
        return (
            <>
                <div class="col-md-4">
                    <div className="pagination">
                         <ul>
                             <li>
                                 <a><Icon icon={chevronLeft} size={20} /></a>
                             </li>
                             <li>
                                 <a>1</a>
                             </li>
                             <li>
                                 <a className="active">2</a>
                             </li>
                             <li>
                                 <a>3</a>
                             </li>
                             <li>
                                 <a>4</a>
                             </li>
                             <li>
                                 <a>...</a>
                             </li>
                             <li>
                                 <a>32</a>
                             </li>
                             <li>
                                 <a><Icon icon={chevronRight} size={20}/></a>
                             </li>
                         </ul>  
                    </div>
                    <div className="w-100 mb-30 pull-left"></div>
                    <div className="pagination lg-pagination">
                         <ul>
                             <li>
                                 <a><Icon icon={chevronLeft} size={20} /></a>
                             </li>
                             <li>
                                 <a>1</a>
                             </li>
                             <li>
                                 <a className="active">2</a>
                             </li>
                             <li>
                                 <a>3</a>
                             </li>
                            
                             <li>
                                 <a>...</a>
                             </li>
                             <li>
                                 <a>32</a>
                             </li>
                             <li>
                                 <a><Icon icon={chevronRight} size={20}/></a>
                             </li>
                         </ul>  
                    </div>
                    <div className="w-100 mb-30 pull-left"></div>
                    

                </div>
                <div class="col-md-5">
               
                    <div className="pagination ">
                         <ul>
                             <li>
                                 <a><Icon icon={chevronLeft} size={20} /></a>
                             </li>
                             <li>
                                 <a>1</a>
                             </li>
                             <li>
                                 <a className="active">2</a>
                             </li>
                             <li>
                                 <a>3</a>
                             </li>
                             <li>
                                 <a>4</a>
                             </li>
                             <li>
                                 <a>...</a>
                             </li>
                             <li>
                                 <a>32</a>
                             </li>
                             <li>
                                 <a><Icon icon={chevronRight} size={20}/></a>
                             </li>
                         </ul>  
                    </div>
                    <div className="w-100 mb-30 pull-left"></div>
                    <div className="pagination lg-pagination">
                         <ul>
                             <li>
                                 <a><Icon icon={chevronLeft} size={20} /></a>
                             </li>
                             <li>
                                 <a>1</a>
                             </li>
                             <li>
                                 <a className="round-active">2</a>
                             </li>
                             <li>
                                 <a>3</a>
                             </li>
                             <li>
                                 <a>4</a>
                             </li>
                             <li>
                                 <a>...</a>
                             </li>
                             <li>
                                 <a>32</a>
                             </li>
                             <li>
                                 <a><Icon icon={chevronRight} size={20}/></a>
                             </li>
                         </ul>  
                    </div>
                </div>
                <div class="col-md-3">
                     <div className="pagination ">
                         <ul>
                             <li>
                                 <a><Icon icon={chevronLeft} size={20} /></a>
                             </li>
                             <li>
                                 <a>1/120</a>
                             </li>

                             <li>
                                 <a><Icon icon={chevronRight} size={20}/></a>
                             </li>
                         </ul>  
                     </div>
                     <div className="w-100 mb-20 pull-left"></div>
                     <div className="pagination lg-pagination">
                         <ul>
                             <li>
                                 <a><Icon icon={chevronLeft} size={20} /></a>
                             </li>
                             <li>
                                 <a>1/120</a>
                             </li>

                             <li>
                                 <a><Icon icon={chevronRight} size={20}/></a>
                             </li>
                         </ul>  
                     </div>
                     <div className="w-100 mb-20 pull-left"></div>
                     <div className="pagination ">
                         <ul>
                             <li className="bg-white-smoke"> 
                                 <a><Icon icon={chevronLeft} size={20} /></a>
                             </li>
                             <li className="bg-white-smoke">
                                 <a>1/120</a>
                             </li>

                             <li className="bg-white-smoke">
                                 <a><Icon icon={chevronRight} size={20}/></a>
                             </li>
                         </ul>  
                     </div>
                     <div className="w-100 mb-20 pull-left"></div>
                     <div className="pagination lg-pagination ">
                         <ul>
                             <li className="bg-white-smoke">
                                 <a><Icon icon={chevronLeft} size={20} /></a>
                             </li>
                             <li className="bg-white-smoke">
                                 <a>1/120</a>
                             </li>

                             <li className="bg-white-smoke">
                                 <a><Icon icon={chevronRight} size={20}/></a>
                             </li>
                         </ul>  
                     </div>
 
                </div>
                <div className="col-md-9 mt-50">
                     <div className="pagination border-pagination">
                         <ul>
                             <li>
                                 <a className="prv-btn">Prev</a>
                             </li>
                             <li>
                                 <a>1</a>
                             </li>
                             <li>
                                 <a className="box-active">2</a>
                             </li>
                             <li>
                                 <a>3</a>
                             </li>
                             <li>
                                 <a>4</a>
                             </li>
                             <li>
                                 <a>5</a>
                             </li>
                             <li>
                                 <a>6</a>
                             </li>
                             <li>
                                 <a>7</a>
                             </li>
                             <li>
                                 <a>8</a>
                             </li>
                             <li>
                                 <a>9</a>
                             </li>
                             <li>
                                 <a>...</a>
                             </li>
                             <li>
                                 <a>132</a>
                             </li>
                             <li>
                                 <a className="nxt-btn">Next</a>
                             </li>
                         </ul>
                     </div>
                     <div className="w-100 mb-30 pull-left"></div>
                     <div className="pagination lg-pagination border-pagination">
                         <ul>
                             <li>
                                 <a className="prv-btn">Prev</a>
                             </li>
                             <li>
                                 <a>1</a>
                             </li>
                             <li>
                                 <a className="box-active">2</a>
                             </li>
                             <li>
                                 <a>3</a>
                             </li>
                             <li>
                                 <a>4</a>
                             </li>
                             <li>
                                 <a>5</a>
                             </li>
                             <li>
                                 <a>6</a>
                             </li>
                             <li>
                                 <a>7</a>
                             </li>
                             <li>
                                 <a>8</a>
                             </li>
                             <li>
                                 <a>9</a>
                             </li>
                             <li>
                                 <a>...</a>
                             </li>
                             <li>
                                 <a>132</a>
                             </li>
                             <li>
                                 <a className="nxt-btn">Next</a>
                             </li>
                         </ul>
                     </div>
                </div>
            </>
        );
    }
}

export default pagination;