import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import Inputtext from "../inputs/inputtext/input_html";
import { Icon } from 'react-icons-kit';
import {mic} from 'react-icons-kit/feather/mic';
import {xCircle} from 'react-icons-kit/feather/xCircle';
import {plus} from 'react-icons-kit/feather/plus';
import {minus} from 'react-icons-kit/feather/minus';
import {chevronUp} from 'react-icons-kit/feather/chevronUp';
import {chevronDown} from 'react-icons-kit/feather/chevronDown';
import {calendar} from 'react-icons-kit/fa/calendar'



class inputfunctional extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          clicks1: 0,
          data: '',
          startDate: new Date()
        };
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
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
      updateState(e) {
        this.setState({data: e.target.value});
     }
      clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
     }
     handleChange = date => {
      this.setState({
        startDate: date
      });
    };
    
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

                    <Inputtext label="Label" msg="Error message" value="Invalid text" iconaling="right" hasError> <i className="inputicon"><Icon icon={mic} size={20} /></i></Inputtext>
             </div>
             <div className="col-md-3">
                    <p class="body1 mb-30">Clear input field icon</p>
                    
                    <div className="form-group placeholder-label  right-icon">
                        <input  type="text" value = {this.state.data} onChange = {this.updateState} required  ref = "myInput"  />
                        
                        <label>Label</label>
                        {/* <h4>{this.state.data}</h4> */}
                        <button className="clear-input" onClick = {this.clearInput}><Icon icon={xCircle} size={20} /></button>
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
             <div className="col-md-3">
                    <p class="body1 mb-30">Voice input icon</p>

                    <div className="form-group placeholder-label  left-icon">
                         <DatePicker
                          selected={this.state.startDate}
                            onChange={this.handleChange}
                          />        
                        <i className="inputicon"><Icon icon={calendar} size={20} /></i>
                    </div>
             </div>
            </>
        );
    }
}

export default inputfunctional;