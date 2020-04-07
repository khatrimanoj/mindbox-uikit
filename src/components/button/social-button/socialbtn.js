import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {twitter} from 'react-icons-kit/feather/twitter';
import {instagram} from 'react-icons-kit/feather/instagram';
import {socialFacebookCircular} from 'react-icons-kit/typicons/socialFacebookCircular';
import {dribbble} from 'react-icons-kit/icomoon/dribbble';
import {behance} from 'react-icons-kit/icomoon/behance'

const containedbtn = (props) => 
{
        return (
            <ul class="btn-list">
                <li>
                     <button className={["btn btn-primary mb-30 " + props.class]}><Icon icon={socialFacebookCircular} size={20} /> Facebook</button>
                </li>
                <li>
                     <button className={["btn btn-mulberry mb-30 " + props.class]}><Icon icon={instagram} size={20} /> Instagram</button>
                </li>
                <li>
                     <button className={["btn btn-primary-variant mb-30 " + props.class]}><Icon icon={twitter} size={20} /> Twitter</button>
                </li>
                <li>
                     <button className={["btn btn-disy-bush mb-30 " + props.class]}><Icon icon={behance} size={20} /></button>
                </li>
                <li>
                     <button className={["btn btn-mulberry mb-30 " + props.class]} ><Icon icon={dribbble} size={20} /></button>
                </li>
            </ul>
        );
}

export default containedbtn;