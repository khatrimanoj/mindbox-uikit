import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {user} from 'react-icons-kit/feather/user'

class input_right_icon extends Component {
    render() {
        return (
            <>
                <div className="col-md-3">
                    <p class="body1 mb-30">Inactive</p>

                    <div className="form-group placeholder-label right-icon"> 
                        <input type="text" required   />
                        <i className="inputicon"><Icon icon={user} size={20} /></i>
                        <label>Label</label>
                        <p className="message">Assistive message</p>  
                    </div>

                </div>
                <div className="col-md-3">
                    <p class="body1 mb-30">Error</p>

                    <div className="form-group placeholder-label error right-icon">
                        <input type="text" required  value="invalid input"  />
                        <i className="inputicon"><Icon icon={user} size={20} /></i>
                        <label>Label</label>
                        <p className="message">Error message</p>
                    </div>
                 </div>
                <div className="col-md-3">
                       <p class="body1 mb-30">Success</p>

                    <div className="form-group placeholder-label success right-icon">
                        <input type="text" required  value="valid input"  />
                        <i className="inputicon"><Icon icon={user} size={20} /></i>
                        <label>Label</label>
                        <p className="message">Success message</p>
                    </div>

                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>

                    <div className="form-group placeholder-label right-icon">
                        <input type="text" placeholder="input text" required   disabled />
                        <i className="inputicon"><Icon icon={user} size={20} /></i>
                        <label>Label</label>
                        <p className="message">Disable input</p>
                    </div>  
                </div>
                <div className="w-100 mb-30"></div>

                <div className="col-md-3">
                    <p class="body1 mb-30">Inactive</p>

                    <div className="form-group lg-input  placeholder-label right-icon">
                        <input type="text" required   />
                        <i className="inputicon"><Icon icon={user} size={20} /></i>
                        <label>Label</label>
                        <p className="message">Assistive message</p>
                    </div>

                </div>
                <div className="col-md-3">
                    <p class="body1 mb-30">Error</p>

                    <div className="form-group lg-input placeholder-label error right-icon">
                        <input type="text" required  value="invalid input"  />
                        <i className="inputicon"><Icon icon={user} size={20} /></i>
                        <label>Label</label>
                        <p className="message">Error message</p>
                    </div>
                 </div>
                <div className="col-md-3">
                       <p class="body1 mb-30">Success</p>

                    <div className="form-group lg-input placeholder-label success right-icon">
                        <input type="text" required  value="valid input"  />
                        <i className="inputicon"><Icon icon={user} size={20} /></i>
                        <label>Label</label>
                        <p className="message">Success message</p>
                    </div>

                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>

                    <div className="form-group lg-input placeholder-label right-icon">
                        <input type="text" placeholder="input text" required   disabled />
                        <i className="inputicon"><Icon icon={user} size={20} /></i>
                        <label>Label</label>
                        <p className="message">Disable input</p>
                    </div>  
                </div>
                <div className="w-100 mb-30"></div>  
            </>
        );
    }
}

export default input_right_icon;