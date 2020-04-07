import React, { Component } from 'react';
import Header from '../header/header';
import Dropdownsimpal from './dropdownsimpal/dropdownsimpal';
import Dropdownsearch from './dropdownsearch/dropdownsearch';

class dropdown extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
        header: [
          {title: 'Dropdown'}
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
                             <p class="body1">Normal Dropdown</p>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <div className="col-md-3">
                                     <Dropdownsimpal   list={["January","February","March","April","May","June","July","August","September","October","November","December"]} />
                                    
                                 </div>
                                 <div className="col-md-3">
                                     <Dropdownsimpal size="lg" list={[{value: 1, label: 'January'}, {value: 2, label:'February'}, {value: 3, label:'March'},
                         {value: 4, label:'April'},{value: 5, label:'May'},{value: 6, label:'June'},{value: 7, label:'July'},
                         {value: 8, label:'August'},{value: 9, label:'September'},{value: 10, label:'October'},
                         {value: 11, label:'November'},{value: 12, label:'December'}]} />
                                 </div>
                                 <div className="col-md-3">
                                     <Dropdownsimpal border="false"   list={["January","February","March","April","May","June","July","August","September","October","November","December"]} />
                                    
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <p class="body1">Dropdown with search</p>
                         </div>
                         <div className="container">
                             <div className="row">
                                 <div className="col-md-3">
                                     <Dropdownsearch list={[{value: 1, label: 'January'}, {value: 2, label:'February'}, {value: 3, label:'March'},
                         {value: 4, label:'April'},{value: 5, label:'May'},{value: 6, label:'June'},{value: 7, label:'July'},
                         {value: 8, label:'August'},{value: 9, label:'September'},{value: 10, label:'October'},
                         {value: 11, label:'November'},{value: 12, label:'December'}]}/>  
 
                                 </div>
 
                             </div>

                         </div>
                     </div>
                 </section>
             </div>
        );
    }
}

export default dropdown;