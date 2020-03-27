import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {mic} from 'react-icons-kit/feather/mic';
import {xCircle} from 'react-icons-kit/feather/xCircle';
import {plus} from 'react-icons-kit/feather/plus';
import {minus} from 'react-icons-kit/feather/minus';
import {chevronUp} from 'react-icons-kit/feather/chevronUp';
import {chevronDown} from 'react-icons-kit/feather/chevronDown'


class inputfunctional extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          clicks1: 0,
          show: true
        };
      }
    
      IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
      }
      IncrementItem1 = () => {
        this.setState({ clicks1: this.state.clicks1 + 1 });
      }
      DecreaseItem1 = () => {
        this.setState({ clicks1: this.state.clicks1 - 1 });
      }
     
    
    render() {
        return (
            <>
              <div className="col-md-3">
                   <p class="body1 mb-30">Dropdown list icon</p>

                <div className="form-group lg-input success">
                    <select>
                        <option>Label</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                </div>

             </div>  
             <div className="col-md-3">
                    <p class="body1 mb-30">Voice input icon</p>

                    <div className="form-group placeholder-label  right-icon">
                        <input type="text" required  />
                        <i className="inputicon"><Icon icon={mic} size={20} /></i>
                        <label>Label</label>
                    </div>
             </div>
             <div className="col-md-3">
                    <p class="body1 mb-30">Clear input field icon</p>

                    <div className="form-group placeholder-label  right-icon">
                        <input  type="text" required  />
                        <i  className="inputicon"><Icon icon={xCircle} size={20} /></i>
                        <label>Label</label>
                    </div>
             </div>
             <div className="col-md-3">
                    <p class="body1 mb-30">incress decress</p>

                    <div className="form-group placeholder-label  right-icon">
                        <div className="incremantbtn pull-left">
                         <button className="btn btn-white-smoke" onClick={this.DecreaseItem}><Icon icon={minus} size={20} /></button>
                         <button className="btn btn-white">{ this.state.clicks }</button>
                         <button className="btn btn-white-smoke" onClick={this.IncrementItem}><Icon icon={plus} size={20} /></button>
                         </div>
                         <div className="incremantbtn style2 pull-right">
                         <button className="btn btn-white">{ this.state.clicks1 }</button>
                         <button className="btn btn-white-smoke" onClick={this.IncrementItem1}><Icon icon={chevronUp} size={10} /></button>
                         <button className="btn btn-white-smoke" onClick={this.DecreaseItem1}><Icon icon={chevronDown} size={10} /></button>
                         
                        
                         </div>
                       

        
                    </div>
             </div>
            </>
        );
    }
}

export default inputfunctional;