import React, { Component } from 'react';

class nolabelFilter extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            colorChips: [
                {
                    id: 1,
                    color: 'red',
                    checked: false
                },
                {
                    id: 2,
                    color: 'yellow',
                    checked: true
                },
                {
                    id: 3,
                    color: 'green',
                    checked: true
                },
                {
                    id: 4,
                    color: 'pelorous',
                    checked: false
                },
                {
                    id: 5,
                    color: 'smoke',
                    checked: true
                }
            ]
        }
    }
    render() {
        return (
            <div className="input-chips-wrapper no-label-chips filter">
                <div className="row">
                    <div className="col-md-3">
                        <div className="flex-div">
                            {this.state.colorChips.map((chipsList, i) => 
                                <div className="form-group input-chips squared" key={i}> 
                                    <input  type="radio" defaultChecked={chipsList.checked}  id={chipsList.id} className={chipsList.color}/>
                                    <label className={`${chipsList.color}`} htmlFor={chipsList.id}></label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="flex-div">
                            {this.state.colorChips.map((chipsList, i) => 
                                <div className="form-group input-chips squared" key={i}> 
                                    <input  type="radio" defaultChecked={chipsList.checked}  id={chipsList.id} className={chipsList.color}/>
                                    <label className={`${chipsList.color} rounded`} htmlFor={chipsList.id}></label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="flex-div">
                            {this.state.colorChips.map((chipsList, i) => 
                                <div className="form-group input-chips squared" key={i}> 
                                    <input  type="radio" defaultChecked={chipsList.checked}  id={chipsList.id} className={chipsList.color}/>
                                    <label className={`${chipsList.color} sm`} htmlFor={chipsList.id}></label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="flex-div">
                            {this.state.colorChips.map((chipsList, i) => 
                                <div className="form-group input-chips squared" key={i}> 
                                    <input  type="radio" defaultChecked={chipsList.checked}  id={chipsList.id} className={chipsList.color}/>
                                    <label className={`${chipsList.color} rounded sm`} htmlFor={chipsList.id}></label>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default nolabelFilter;