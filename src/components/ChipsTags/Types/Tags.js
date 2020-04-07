import React, { Component } from 'react';
const Default = ['form-group default-tags'];
const outline = ['form-group outline-tags'];
const filled = ['form-group filled-tags'];
const filter = ['default', 'focus'];
const colorDefault = ['form-group color color-default'];
const colorOutline = ['form-group color color-outline'];
const numTag = ["form-group number"];
class Tags extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            tags: [
                {
                    id: 1,
                    Title: 'Enabled',
                },
                {
                    id: 2,
                    Title: 'Hover',
                },
            ],
            color: [
                {
                    id: 1,
                    Title: "Red"
                },

                {
                    id: 2,
                    Title: "Green"
                },

                {
                    id: 3,
                    Title: "Blue"
                }
            ],
            number: [
                {
                    id: 1,
                    Title: "+10",
                    class: "red"
                },
                {
                    id: 2,
                    Title: "5",
                    class: "yellow"
                }
            ]
        }
    }
    render() {
        return (
            <div className="input-chips-wrapper tags-list">
                <div className="row">
                    <div className="col-md-2">
                        <div className="flex-div">
                            {this.state.tags.map((chipsList, i) => 
                                <div className={`${outline}`} key={i}> 
                                    <label className={filter[i]}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                            {this.state.tags.map((chipsList, i) => 
                                <div className={`${outline}`} key={i}> 
                                    <label className={`${filter[i]} rounded`}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="flex-div">
                            {this.state.tags.map((chipsList, i) => 
                                <div className={`${Default}`} key={i}> 
                                    <label className={filter[i]}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                            {this.state.tags.map((chipsList, i) => 
                                <div className={`${Default}`} key={i}> 
                                    <label className={`${filter[i]} rounded`}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>  
                    <div className="col-md-2">
                        <div className="flex-div">
                            {this.state.tags.map((chipsList, i) => 
                                <div className={`${filled}`} key={i}> 
                                    <label className={filter[i]}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                            {this.state.tags.map((chipsList, i) => 
                                <div className={`${filled}`} key={i}> 
                                    <label className={`${filter[i]} rounded`}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>  
                    <div className="col-md-3">
                        <div className="flex-div">
                            {this.state.color.map((chipsList, i) => 
                                <div className={`${colorOutline} color`} key={i}> 
                                    <label className={chipsList.Title}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                            <div>
                            {this.state.color.map((chipsList, i) => 
                                <div className={`${colorOutline} color`} key={i}> 
                                    <label className={`${chipsList.Title} rounded`}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}</div>
                        </div>
                    </div>  
                    <div className="col-md-3">
                        <div className="flex-div">
                            {this.state.color.map((chipsList, i) => 
                                <div className={`${colorDefault} color`} key={i}> 
                                    <label className={chipsList.Title}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                            {this.state.color.map((chipsList, i) => 
                                <div className={`${colorDefault} color`} key={i}> 
                                    <label className={`${chipsList.Title} rounded`}> {chipsList.Title}
                                        <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>  
                    <div className="col-md-1">
                        <div className="flex-div">
                            <div className="number-tag">
                                {this.state.number.map((chipsList, i) => 
                                    <div className={`${numTag} color`} key={i}> 
                                        <label className={`${chipsList.class}`}> {chipsList.Title}
                                            <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                        </label>
                                    </div>
                                )}
                                <div>
                                {this.state.number.map((chipsList, i) => 
                                    <div className={`${numTag} color`} key={i}> 
                                        <label className={`${chipsList.class} rounded`}> {chipsList.Title}
                                            <input name="selection" type="radio" id={i.id} className={chipsList.class}/>
                                        </label>
                                    </div>
                                )}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tags;