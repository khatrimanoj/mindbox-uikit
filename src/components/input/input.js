import React, { Component } from 'react';
import Header from '../header/header';
import Inputtxt from './inputs/input_text';
import Inputfunctional from './inputfunctional/inputfunctional';
import Textarea from './textarea/textarea';
import Chekbox from './Checkbox/Checkbox';
import Switchs from './switch/Switch';
import Radiobtn from './radionbtn/Radiobtn';

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
                        
                         <div className="w-100 pull-left mb-30"></div>
                       
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Functional Icons</div>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                             <Inputfunctional/>
                                
  
                             </div>
                         </div>
                         <div className="w-100 pull-left mb-30"></div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Multiline text field & Text area</div>
                             <p class="body1">When a long input text overflows field length, the field expands and text jumps onto a new line.</p>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                             <Textarea/>
                                
  
                             </div>
                         </div>
                         <div className="w-100 pull-left mb-30"></div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Checkbox</div>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                             <Chekbox />
                                
  
                             </div>
                         </div>
                         <div className="w-100 pull-left mb-30"></div>
                         <div className="w-100 pull-left mb-30"></div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Toggle Switch</div>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                              <Switchs/>
  
                             </div>
                         </div>
                         <div className="w-100 pull-left mb-30"></div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Toggle Switch</div>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                              <Radiobtn/>
  
                             </div>
                         </div>
                     </div>
                 </section>
            </div>
        );
    }
}

export default input;