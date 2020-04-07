import React, { Component} from 'react';
import  InputRange  from './InputSlider';

class noValueSlider extends Component {

    render() {
        return (
            <form className="form">  
                <ul>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Enable</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} /> 
                                    <InputRange value={50} min={0} max={100} /> 
                                    <InputRange value={100} min={0} max={100} /> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <InputRange min={0} max={100} step={2} value={[30, 70]} className="double-range-slider"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Disabled</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} disabled className="disabled"/> 
                                    <InputRange value={50} min={0} max={100} disabled className="disabled"/> 
                                    <InputRange value={100} min={0} max={100} disabled className="disabled"/> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <InputRange min={30} max={80} step={2} disabled className="disabled double-range-slider"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Hover</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} className="hover md"/> 
                                    <InputRange value={50} min={0} max={100} className="hover md"/> 
                                    <InputRange value={100} min={0} max={100}  className="hover md"/> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <InputRange min={30} max={80} step={2} className="hover double-range-slider"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Enable</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} className="large"/> 
                                    <InputRange value={50} min={0} max={100} className="large"/> 
                                    <InputRange value={100} min={0} max={100} className="large"/> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <InputRange min={30} max={80} step={2} className="large double-range-slider"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Disabled</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} disabled className="disabled large"/> 
                                    <InputRange value={50} min={0} max={100} disabled className="disabled large"/> 
                                    <InputRange value={100} min={0} max={100} disabled className="disabled large"/> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <InputRange min={30} max={80} step={2} disabled className="disabled double-range-slider large"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Hover</p>
                            </div>
                            <div className="col-md-7">
                                <div className="flex-div">
                                    <InputRange value={0} min={0} max={100} className="hover large"/> 
                                    <InputRange value={50} min={0} max={100} className="hover large"/> 
                                    <InputRange value={100} min={0} max={100}  className="hover large"/> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="flex-div">
                                    <InputRange min={30} max={80} step={2} className="hover large double-range-slider"/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
        );
    }
}


export default noValueSlider;