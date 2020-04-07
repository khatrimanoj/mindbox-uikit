import React, { Component } from 'react';

const Default = ['form-group input-chips default-chips left-icon'];
const outline = ['form-group input-chips outline-chips left-icon'];
const filled = ['form-group input-chips filled-chips left-icon'];
const filter = ['default', 'disabled', 'focus', 'selected'];
class selectionChips extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            selectionChips: [
                {
                    id: 1,
                    Title: 'Enabled',
                },
                {
                    id: 2,
                    Title: 'Disabled',
                },
                {
                    id: 3,
                    Title: 'Hover',
                },
                {
                    id: 4,
                    Title: 'Selected',
                },
            ],
            sizeChips: [
                {
                    id: 1,
                    Title: "XS"
                },
                {
                    id: 2,
                    Title: "S"
                },
                {
                    id: 3,
                    Title: "M"
                },
                {
                    id: 4,
                    Title: "L"
                },
                {
                    id: 5,
                    Title: "XL"
                }
            ]
        }
    }
    render() {
        return (
            <div className="input-chips-wrapper selection-chips">
                <div className="row">
                    <div className="col-md-4">
                        <div className="flex-div">
                            {this.state.selectionChips.map((chipsList, i) => 
                                <div className={`${Default}`} key={i}> 
                                    <label className={filter[i]}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                         <div className="flex-div">
                            {this.state.selectionChips.map((chipsList, i) => 
                                <div className={`${Default}`} key={i}> 
                                    <label className={`${filter[i]} rounded`}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div> 
                    <div className="col-md-4">
                        <div className="flex-div">
                            {this.state.selectionChips.map((chipsList, i) => 
                                <div className={`${outline}`} key={i}> 
                                    <label className={filter[i]}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                         <div className="flex-div">
                            {this.state.selectionChips.map((chipsList, i) => 
                                <div className={`${outline}`} key={i}> 
                                    <label className={`${filter[i]} rounded`}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div> 
                    <div className="col-md-4">
                        <div className="flex-div">
                            {this.state.sizeChips.map((chipsList, i) => 
                                <div className={`${outline}`} key={i}> 
                                    <label className={filter[i]}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                         <div className="flex-div">
                            {this.state.sizeChips.map((chipsList, i) => 
                                <div className={`${outline}`} key={i}> 
                                    <label className={`${filter[i]} rounded`}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default selectionChips;