import React, { Component } from 'react';

const Default = ['form-group input-chips default-chips left-icon'];
const filled = ['form-group input-chips filled-chips left-icon'];
const filter = ['default', 'disabled', 'focus', 'selected', 'hover-selected'];
const colorfilter = ['red', 'yellow', 'green', 'pelorous','white'];
class imgFilterChips extends Component {
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
            colorChips: [
                {
                    id: 1,
                    Title: "Red"
                },
                {
                    id: 2,
                    Title: "Yellow"
                },
                {
                    id: 3,
                    Title: "Green"
                },
                {
                    id: 4,
                    Title: "Pelorous"
                },
                {
                    id: 5,
                    Title: "White"
                }
            ],

        }
    }
    render() {
        return (
            <div className="input-chips-wrapper filter-img-chips">
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
                                    <label className={`${filter[i]} md`}> {chipsList.Title}
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
                        <div className="flex-div">
                            {this.state.selectionChips.map((chipsList, i) => 
                                <div className={`${filled}`} key={i}> 
                                    <label className={`${filter[i]} rounded md`}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div> 
                    <div className="col-md-6">
                        <div className="flex-div">
                            {this.state.colorChips.map((chipsList, i) => 
                                <div className={`${Default}`} key={i}> 
                                    <label className={colorfilter[i]}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                        <div className="flex-div">
                            {this.state.colorChips.map((chipsList, i) => 
                                <div className={`${Default}`} key={i}> 
                                    <label className={`${colorfilter[i]} md`}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                        <div className="flex-div">
                            {this.state.colorChips.map((chipsList, i) => 
                                <div className={`${filled}`} key={i}> 
                                    <label className={`${colorfilter[i]} rounded`}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                        <div className="flex-div">
                            {this.state.colorChips.map((chipsList, i) => 
                                <div className={`${filled}`} key={i}> 
                                    <label className={`${colorfilter[i]} rounded md`}> {chipsList.Title}
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

export default imgFilterChips;