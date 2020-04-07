import React, { Component } from 'react';
import Radiobtns from './radiobtnhtml/Radiobtnhtml'

class Radiobtn extends Component {
    render() {
        return (
            <>
                <div className="col-md-3">
                    <Radiobtns id="1" label="Enabled" name="a"/>
                </div>
                <div className="col-md-3">
                    <Radiobtns id="2" label="Enabled" checked name="a"/>
                </div>
                <div className="col-md-3">
                    <Radiobtns id="3" label="Enabled" disabled name="a"/>
                </div>
            </>
        );
    }
}

export default Radiobtn;