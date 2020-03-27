import React, { Component } from 'react';

class input_text extends Component {
    render() {
        return (
            <>
                <div className="col-md-3">
                    <p class="body1 mb-30">Inactive</p>

                    <div className="form-group placeholder-label">
                        <input type="text" required   />
                        <label>Label</label>
                        <p className="message">Assistive message</p>
                    </div>

                </div>
                <div className="col-md-3">
                    <p class="body1 mb-30">Error</p>

                    <div className="form-group placeholder-label error">
                        <input type="text" required  value="invalid input"  />
                        <label>Label</label>
                        <p className="message">Error message</p>
                    </div>
                 </div>
                <div className="col-md-3">
                       <p class="body1 mb-30">Success</p>

                    <div className="form-group placeholder-label success">
                        <input type="text" required  value="valid input"  />
                        <label>Label</label>
                        <p className="message">Success message</p>
                    </div>

                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>

                    <div className="form-group placeholder-label">
                        <input type="text" placeholder="input text" required   disabled />
                        <label>Label</label>
                        <p className="message">Disable input</p>
                    </div>  
                </div>
                <div className="w-100 mb-30"></div>

                <div className="col-md-3">
                    <p class="body1 mb-30">Inactive</p>

                    <div className="form-group lg-input  placeholder-label">
                        <input type="text" required   />
                        <label>Label</label>
                        <p className="message">Assistive message</p>
                    </div>

                </div>
                <div className="col-md-3">
                    <p class="body1 mb-30">Error</p>

                    <div className="form-group lg-input placeholder-label error">
                        <input type="text" required  value="invalid input"  />
                        <label>Label</label>
                        <p className="message">Error message</p>
                    </div>
                 </div>
                <div className="col-md-3">
                       <p class="body1 mb-30">Success</p>

                    <div className="form-group lg-input placeholder-label success">
                        <input type="text" required  value="valid input"  />
                        <label>Label</label>
                        <p className="message">Success message</p>
                    </div>

                </div>
                <div className="col-md-3">
                   <p class="body1 mb-30">Disabled</p>

                    <div className="form-group lg-input placeholder-label">
                        <input type="text" placeholder="input text" required   disabled />
                        <label>Label</label>
                        <p className="message">Disable input</p>
                    </div>  
                </div>
                <div className="w-100 mb-30"></div>
            </>
        );
    }
}

export default input_text;