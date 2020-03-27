import React, { Component } from 'react';
import Header from '../header/header'

class Grid extends Component {
    state = {
        header: [
          {title: 'Desktop Grid'}
        ]
     }
    render() {
        let grid12 = [];
        let grid6 = [];
        let grid4 = [];
        let grid3 = [];
        let grid2 = [];
        for (let i=0; i <= 11; i++)
        {
            grid12.push(
                <div className="col-xs-1 col-md-1 col-lg-1 align-items-md-center">
                    <div className="grid-box ">
                    </div>
                </div>
            )
        }
        for (let i=0; i <= 5; i++)
        {
            grid6.push(
                 <div className="col-xs-2 col-md-2 col-lg-2 align-items-md-center">
                    <div className="grid-box ">
                    </div>
                 </div>
            )
        }
        for (let i=0; i <= 3; i++)
        {
            grid4.push(
                <div className="col-xs-3 col-md-3 col-lg-3 align-items-md-center">
                <div className="grid-box ">
                </div>
            </div>
            )
        }
        for (let i=0; i <= 2; i++)
        {
            grid3.push(
                <div className="col-xs-4 col-md-4 col-lg-4 align-items-md-center">
                                <div className="grid-box ">
                                  
                                </div>
                            </div>
            )
        }
        for (let i=0; i <= 1; i++)
        {
            grid2.push(
                <div className="col-xs-6 col-md-6 col-lg-6 align-items-md-center">
                                <div className="grid-box ">
                                   
                                </div>
                            </div>
            )
        }
        return (
            <div className="wrapper">
                  <section className="container">
                     <div className="row">
                            <Header header={this.state.header[0].title} />
                            <div className="col-xs-12 col-md-12 col-lg-12 align-items-md-center" >
                                <div className="grid-box ">
                                    
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-xs-9 col-md-9 col-lg-9 align-items-md-center">
                                <div className="grid-box ">
                                   
                                </div>
                            </div>
                            <div className="col-xs-3 col-md-3 col-lg-3 align-items-md-center">
                                <div className="grid-box ">
                                    
                                </div>
                            </div>

                            <div className="w-100"></div>

                            
                            <div className="col-xs-8 col-md-8 col-lg-8 align-items-md-center">
                                <div className="grid-box ">
                                   
                                </div>
                            </div>
                            <div className="col-xs-4 col-md-4 col-lg-4 align-items-md-center">
                                <div className="grid-box ">
                                   
                                </div>
                            </div>

                            <div className="w-100"></div>
                            {grid2}
                            <div className="w-100"></div>
                            {grid3}
                            <div className="w-100"></div>
                            {grid4}
                            <div className="w-100"></div>
                            {grid6}
                            <div className="w-100"></div>
                            {grid12}
                           
                     </div>
                  </section>
             </div>
        );
    }
}

export default Grid;