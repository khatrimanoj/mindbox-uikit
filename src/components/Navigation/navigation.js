import React, { Component } from 'react';
import Header from '../header/header';
import Tabs from './Tabs/tabs';
import Breadcrumbs from './Breadcrumbs/breadcrumbs';
import Pagination from './Pagination/pagination';

class navigation extends Component {
    state = {
        header: [
          {title: 'Navigation'}
        ]
     }
    render() {

        return (
            <div className="wrapper">
                  <section className="container">
                     <div className="row">
                            <Header header={this.state.header[0].title} />
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Tabs</div>
                              <p className="body1">Tabs allow navigation between groups of related content.</p>
                         </div>
                         <div className="container">
                             <div className="row">
                                 <Tabs></Tabs>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Breadcrumbs</div>
                              <p className="body1">Breadcrumbs are used to show hierarchy of content.</p>
                         </div>
                         <div className="container">
                             <div className="row">
                                 <Breadcrumbs/>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Pagination</div>
                              <p className="body1">Pagination is required for websites with lots of pages.</p>
                         </div>
                         <div className="container">
                             <div className="row no-gutters">
                                 <Pagination />
                             </div>
                         </div>
                     </div>
                 </section>
            </div>

        );
    }
}

export default navigation;