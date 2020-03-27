import React, { Component } from 'react';
import Tooltipcode from './tooltipcode/tooltipcode';
import Tooltipicon from './tooltip-Icon/tooltipicon';
import Tooltipprice from './tooltip-price/tooltipprice'
import {clock} from 'react-icons-kit/feather/clock';



class tooltip extends Component {
    render() {
        return (
            <>
            <div className="col-md-4 no-gutter">
                 <div className="row no-gutters mb-30">
                    <div className="col-md-3">
                        <Tooltipcode type={'tooltip-white'} message={'Aling left'} position={'top'}>tooltip</Tooltipcode>
                    </div>
                    <div className="col-md-3">
                        <Tooltipcode type={'tooltip-red'} message={'Aling Center'} position={'bottom'}>tooltip</Tooltipcode>
                    </div>
                    <div className="col-md-3">
                    <Tooltipcode type={'tooltip-yellow'} message={'Aling right'} position={'right'}>tool</Tooltipcode>
                    </div>
                    <div className="col-md-3">
                    <Tooltipcode type={'tooltip-green'} message={'Aling left'} position={'left'}>tool</Tooltipcode>
                    </div>
                 </div>
                 <div className="row no-gutters">
                    <div className="col-md-3">
                        <Tooltipcode type={'tooltip-orange'} message={'Aling left'} position={'top-left'}>tooltip</Tooltipcode>
                    </div>
                    <div className="col-md-3">
                        <Tooltipcode type={'tooltip-primary'} message={'Aling Center'} position={'top-right'}>tooltip</Tooltipcode>
                    </div>
                    <div className="col-md-3">
                    <Tooltipcode type={'tooltip-korma'} message={'Aling right'} position={'bottom-left'}>tooltip</Tooltipcode>
                    </div>
                    <div className="col-md-3">
                    <Tooltipcode type={'tooltip-violet'} message={'Aling left'} position={'bottom-right'}>tooltip</Tooltipcode>
                    </div>
                 </div>
                 
            </div>
            <div className="col-md-4">
                  <div className="row no-gutters">
                    <div className="col-md-6 mb-30">
                        <Tooltipicon iconbox={clock}  type={'tooltip-orange'} message={'23 min away'} position={'bottom-left'}><a className="text-primary subtitle1">Destination</a></Tooltipicon>
                    </div>
                    <div className="col-md-6 mb-30">
                        <Tooltipicon iconbox={clock}  type={'tooltip-red'} message={'23 min away'} position={'bottom-left'}><a className="text-primary subtitle1">Destination</a></Tooltipicon>
                    </div>
                    <div className="col-md-6 mb-30">
                        <Tooltipicon iconbox={clock}  type={'tooltip-yellow'} message={'23 min away'} position={'bottom-right'}><a className="text-primary subtitle1">Destination</a></Tooltipicon>
                    </div>
                    <div className="col-md-6 mb-30">
                        <Tooltipicon iconbox={clock}  type={'tooltip-korma'} message={'23 min away'} position={'bottom-right'}><a className="text-primary subtitle1">Destination</a></Tooltipicon>
                    </div>
                    
                    
                 </div>

            </div>
            <div className="col-md-4">
                 <div className="row no-gutters">
                    <div className="col-md-6 mb-30">
                        <Tooltipprice date={'Sep 23, 2019'}  type={'tooltip-orange'} message={'$ 462,23'} position={'bottom-left'}><a className="text-primary subtitle1">price</a></Tooltipprice>
                    </div>
                    <div className="col-md-6 mb-30">
                        <Tooltipprice date={'today'}  type={'tooltip-green'} message={'$ 3 462,23'} position={'bottom-left'}><a className="text-primary subtitle1">price</a></Tooltipprice>
                    </div>
                      
                    
                 </div>
            </div>
            <div className='container'>

          </div>
          </>
        );
    }
}

export default tooltip;