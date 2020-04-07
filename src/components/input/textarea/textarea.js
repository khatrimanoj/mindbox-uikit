import React, { Component } from 'react';
import autosize from "autosize";

class textarea extends Component {
    componentDidMount() {
        this.textarea.focus();
        autosize(this.textarea);
        this.textarea1.focus();
        autosize(this.textarea1);
        this.textarea2.focus();
        autosize(this.textarea2);
        this.textarea3.focus();
        autosize(this.textarea3);
        this.textarea4.focus();
        autosize(this.textarea4);
        this.textarea5.focus();
        autosize(this.textarea5);
      }
    render() {
       
        return (
            <>
                 <div className="col-md-3">
                  
                       <div className="form-group placeholder-label ">
                             <textarea
                              
                                ref={c => (this.textarea = c)}
                                rows={1}
                                defaultValue=""
                                required
                                />
                             <label>Label</label>
                       </div>

                </div>
                <div className="col-md-3">
                    
                       <div className="form-group placeholder-label ">
                             <textarea
                              
                                ref={c => (this.textarea1 = c)}
                                rows={1}
                                defaultValue=" Alice was not a bit hurt, and she"
                                required
                                ></textarea>
                             <label>Label</label>
                       </div>

                </div>
                <div className="col-md-3">
                  
                       <div className="form-group placeholder-label ">
                             <textarea
                              
                                ref={c => (this.textarea2 = c)}
                                rows={1}
                                defaultValue="Alice was not a bit hurt, and she
                                jumped up on to her feet in a
                                moment"
                                required
                                ></textarea>
                             <label>Label</label>
                       </div>

                </div>
                <div className="w-100 pull-left mb-30"></div>

                <div className="col-md-3">
                  
                  <div className="form-group lg-textarea placeholder-label ">
                        <textarea
                         
                           ref={c => (this.textarea3 = c)}
                           rows={1}
                           defaultValue=""
                           required
                           />
                        <label>Label</label>
                  </div>

           </div>
           <div className="col-md-3">
               
                  <div className="form-group lg-textarea placeholder-label ">
                        <textarea
                         
                           ref={c => (this.textarea4 = c)}
                           rows={1}
                           defaultValue=" Alice was not a bit hurt, and she"
                           required
                           ></textarea>
                        <label>Label</label>
                  </div>

           </div>
           <div className="col-md-3">
             
                  <div className="form-group lg-textarea placeholder-label ">
                        <textarea
                         
                           ref={c => (this.textarea5 = c)}
                           rows={1}
                           defaultValue="Alice was not a bit hurt, and she
                           jumped up on to her feet in a
                           moment"
                           required
                           ></textarea>
                        <label>Label</label>
                  </div>

           </div>
                
                
            </>
        );
    }
}

export default textarea;