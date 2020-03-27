import React, { Component } from 'react';

class inputwithoutlabel extends Component {
    render() {
        return (
            <>
            <div className="col-md-3">
                <p class="body1 mb-30">Inactive</p>

                <div className="form-group"> 
                    <input type="text" required   />
                    <p className="message">Assistive message</p>  
                </div>

            </div>
            <div className="col-md-3">
                <p class="body1 mb-30">Error</p>

                <div className="form-group  error">
                    <input type="text" required  value="invalid input"  />
                                        <p className="message">Error message</p>
                </div>
             </div>
            <div className="col-md-3">
                   <p class="body1 mb-30">Success</p>

                <div className="form-group  success ">
                    <input type="text" required  value="valid input"  />
                    <p className="message">Success message</p>
                </div>

            </div>
            <div className="col-md-3">
               <p class="body1 mb-30">Disabled</p>

                <div className="form-group ">
                    <input type="text" placeholder="input text" required   disabled />
                    <p className="message">Disable input</p>
                </div>  
            </div>
            <div className="w-100 mb-30"></div>

            <div className="col-md-3">
                <p class="body1 mb-30">Inactive</p>

                <div className="form-group lg-input">
                    <input type="text" required   />
                    <p className="message">Assistive message</p>
                </div>

            </div>
            <div className="col-md-3">
                <p class="body1 mb-30">Error</p>

                <div className="form-group lg-input error">
                    <input type="text" required  value="invalid input"  />
                    <p className="message">Error message</p>
                </div>
             </div>
            <div className="col-md-3">
                   <p class="body1 mb-30">Success</p>

                <div className="form-group lg-input success">
                    <input type="text" required  value="valid input"  />
                    <p className="message">Success message</p>
                </div>

            </div>
            <div className="col-md-3">
               <p class="body1 mb-30">Disabled</p>

                <div className="form-group lg-input">
                    <input type="text" placeholder="input text" required   disabled />
                    <p className="message">Disable input</p>
                </div>  
            </div>
            <div className="w-100 mb-30"></div>
        </>
        );
    }
}

export default inputwithoutlabel;