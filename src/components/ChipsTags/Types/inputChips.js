import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {x} from 'react-icons-kit/feather/x';
import {mapPin} from 'react-icons-kit/feather/mapPin'

const Default = ['form-group input-chips default-chips left-icon'];
const outline = ['form-group input-chips outline-chips left-icon'];
const filled = ['form-group input-chips filled-chips left-icon'];
const filter = ['', 'disabled', 'focus'];

class inputChips extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            inputChips: [
                {
                    id: 1,
                    Title: 'Enabled',
                },
                {
                    id: 2,
                    Title: 'Disabled',
                    disabled: true,
                },
                {
                    id: 3,
                    Title: 'Hover',
                },
            ],
        }
    }

    deleteChips = (chipsIndex) => {
        const inputChips = this.state.inputChips;

        inputChips.splice(chipsIndex, 1);
        this.setState({ inputChips: inputChips });
    }

    render() {
        return (
            <div className="input-chips-wrapper">
                <div className="row">
                    <div className="col-md-4">
                        <div className="default">
                            {this.state.inputChips.map((chipsList, i) => 
                                <div className={`${Default} ${filter[i]}`} key={i}> 
                                    <i className="inputicon"><Icon icon={mapPin} size={16} /></i>
                                    <input name="selection" type="text" value={chipsList.Title} disabled={chipsList.disabled} autoFocus={filter[i]} readOnly id={i.id} />
                                    <i className="cross-icon" onClick={()=>this.deleteChips(i)}><Icon icon={x} size={15}/></i>
                                </div>
                            )}
                            {this.state.inputChips.map((chipsList, i) => 
                                <div className={`${Default} ${filter[i]}`} key={i} id={chipsList.id}> 
                                    <i className="inputicon"><Icon icon={mapPin} size={16} /></i>
                                    <input name="selection" type="text" value={chipsList.Title} disabled={chipsList.disabled}  readOnly id={i.id} className="rounded"/>
                                    <i className="cross-icon" onClick={()=>this.deleteChips(i)}><Icon icon={x} size={15}/></i>
                                </div>
                            )}
                        </div>
                    </div> 
                    <div className="col-md-4">
                        <div className="outline">
                            {this.state.inputChips.map((chipsList, i) => 
                                <div className={`${outline} ${filter[i]}`} key={i} id="outline"> 
                                    <i className="inputicon"><Icon icon={mapPin} size={16} /></i>
                                    <input name="selection" type="text" value={chipsList.Title} disabled={chipsList.disabled} readOnly id={i.id} />
                                    <i className="cross-icon" onClick={()=>this.deleteChips(i)}><Icon icon={x} size={15}/></i>
                                </div>
                            )}
                            {this.state.inputChips.map((chipsList, i) => 
                                <div className={`${outline} ${filter[i]}`} key={i} id={chipsList.id}> 
                                    <i className="inputicon"><Icon icon={mapPin} size={16} /></i>
                                    <input name="selection" type="text" value={chipsList.Title} disabled={chipsList.disabled} readOnly id={i.id} className="rounded"/>
                                    <i className="cross-icon" onClick={()=>this.deleteChips(i)}><Icon icon={x} size={15}/></i>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        {this.state.inputChips.map((chipsList, i) => 
                            <div className={`${filled} ${filter[i]}`} key={i} id="filled"> 
                                <i className="inputicon"><Icon icon={mapPin} size={16} /></i>
                                <input name="selection" type="text" value={chipsList.Title} disabled={chipsList.disabled} readOnly id={i.id} />
                                <i className="cross-icon" onClick={()=>this.deleteChips(i)}><Icon icon={x} size={15}/></i>
                            </div>
                        )}
                        {this.state.inputChips.map((chipsList, i) => 
                            <div className={`${filled} ${filter[i]}`} key={i} id={chipsList.id}> 
                                <i className="inputicon"><Icon icon={mapPin} size={16} /></i>
                                <input name="selection" type="text" value={chipsList.Title} disabled={chipsList.disabled} readOnly id={i.id} className="rounded"/>
                                <i className="cross-icon" onClick={()=>this.deleteChips(i)}><Icon icon={x} size={15}/></i>
                            </div>
                        )}
                    </div> 
                </div>
            </div>
        );
    }
}

export default inputChips;