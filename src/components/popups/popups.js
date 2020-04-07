import React, { Component } from 'react';
import Header from '../header/header';
import Mdmodel from './mdpopup/mdpopup';
import Lgpopup from './lgpopup/lgpopup';

class popups extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
           header: [
              {title: 'Popups'}
            ],
        }
    }
    render() {
        return (
            <div className="wrapper">
                 <section className="container">
                     <div className="row example-modal">
                         <Header header={this.state.header[0].title} />
                         <div className="container mb-50">
                             <div className="row">
                                 <Mdmodel/>
                                 <div className="w-100 pull-left mb-30"></div>
                                 <Lgpopup/>
                             </div>
                         </div>
                     </div>
                 </section>
            </div>
        );
    }
}

export default popups;