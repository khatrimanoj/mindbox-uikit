import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {userPlus} from 'react-icons-kit/feather/userPlus';
import {chevronRight} from 'react-icons-kit/feather/chevronRight';
import {cloud} from 'react-icons-kit/feather/cloud';

const containedbtn = (props) => 
{
        return (
            <ul class="btn-list">
                <li>
                     <button className={["btn mb-30 " + props.class]}>Button</button>
                </li>
                <li>
                     <button className={["btn mb-30 " + props.class]}><Icon icon={userPlus} size={20} /> Add friend</button>
                </li>
                <li>
                     <button className={["btn mb-30 " + props.class]}>Next <Icon icon={chevronRight} size={20} /></button>
                </li>
                <li>
                     <button className={["btn mb-30 " + props.class]}><Icon icon={cloud} size={20} /></button>
                </li>
                <li>
                     <button className={["btn mb-30  btn-disable " + props.disable]} disabled>Disable</button>
                </li>
            </ul>
        );
}

export default containedbtn;