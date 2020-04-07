import React, { Component } from 'react';
const Default = ['form-group input-chips default-chips left-icon'];
const outline = ['form-group input-chips outline-chips left-icon'];
const filled = ['form-group input-chips filled-chips left-icon'];
const filter = ['default', 'disabled', 'focus', 'selected','hover-selected'];
class filterChips extends Component {
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
                {
                    id: 5,
                    Title: 'Hover Selected',
                },
            ],
        }
    }
    render() {
        return (
            <>
                <div className="input-chips-wrapper filter-chips">
                    <div className="row">
                        <div className="col-md-6">
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
                        <div className="col-md-6">
                            <div className="flex-div">
                                {this.state.selectionChips.map((chipsList, i) => 
                                    <div className={`${filled}`} key={i}> 
                                        <label className={filter[i]}> {chipsList.Title}
                                            <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                        </label>
                                    </div>
                                )}
                            </div>
                            <div className="flex-div">
                                {this.state.selectionChips.map((chipsList, i) => 
                                    <div className={`${filled}`} key={i}> 
                                        <label className={`${filter[i]} rounded`}> {chipsList.Title}
                                            <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div> 
                        <div className="col-md-6">
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
                    </div>
                </div>
            </>
        );
    }
}

export default filterChips;