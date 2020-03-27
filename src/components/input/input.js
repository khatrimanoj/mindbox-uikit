import React, { Component } from 'react';
import Header from '../header/header';
import Inputtxt from './inputs/input_text';
import Inputlefticon from './input-with-left-icon/input_left_icon';
import InputRighticon from './input-with-right-icon/input_right_icon';
import Inputwithoutlabel from './inputwithoutlabel/inputwithoutlabel';
import Inputfunctional from './inputfunctional/inputfunctional';

class input extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
        header: [
          {title: 'Inputs'}
        ],
         }
    }
    render() {
        return (
            <div className="wrapper">
                  <section className="container">
                     <div className="row">
                         <Header header={this.state.header[0].title} />
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Text field with label</div>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <Inputtxt/>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Text field with label and left icon</div>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <Inputlefticon/>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Text field with label and right icon</div>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <InputRighticon/>
                                
  
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Text field without label</div>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <Inputwithoutlabel/>
                                
  
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Functional Icons</div>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                             <Inputfunctional/>
                                
  
                             </div>
                         </div>
                     </div>
                 </section>
            </div>
        );
    }
}

export default input;