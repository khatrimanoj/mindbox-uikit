import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {heart} from 'react-icons-kit/feather/heart';
import {facebookF} from 'react-icons-kit/fa/facebookF';



class label_button extends Component {
    render() {
        return (
            <>
                <ul class="btn-list">
                    <li>
                        <button className="btn btn-primary btn-label"><div className="icon"><Icon icon={heart} /><span className="socialname">Like</span></div><span className="count btn-line-primary">23</span></button>
                    </li>
                    <li>
                        <button className="btn btn-primary btn-label"><div className="icon"><Icon icon={heart} /></div><span className="count btn-line-primary">23</span></button>
                    </li>
                    <li>
                        <button className="btn btn-red btn-label"><div className="icon border"><Icon icon={heart} /><span className="socialname">Like</span></div><span className="count btn-line-red">23</span></button>
                    </li>
                    <li>
                        <button className="btn btn-red btn-label"><div className="icon border"><Icon icon={heart} /></div><span className="count btn-line-red">23</span></button>
                    </li>
                    <li>
                        <button className="btn btn-red btn-label"><div className="icon border"><Icon icon={facebookF} /><span className="socialname">Share</span></div><span className="count btn-line-red">23</span></button>
                    </li>
                    <li>
                        <button className="btn btn-red btn-label"><div className="icon border"><Icon icon={facebookF} /></div><span className="count btn-line-red">23</span></button>
                    </li>
                </ul>
                <div className="w-100 mb-30 pull-left"></div>
            </>
        );
    }
}

export default label_button;