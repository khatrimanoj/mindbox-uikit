import React, { Component } from 'react';
import Avitaricon from './avitar-icon/avitar_icon';
import Avitardropdown from './avitar-dropdown/avitar_dropdown';

class avitar extends Component {
    render() {
        return (
            <>
                <div className="col-md-3">
                    <Avitaricon/>
                </div>
                <div className="col-md-9">
                    <Avitardropdown/>
                </div>
            </>
        );
    }
}

export default avitar;