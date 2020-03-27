import React from 'react';
import Socialbtn from './socialbtn';

const socialiconlist = (props) => props.socialbtn.map((arrayheading) =>{
        return  <Socialbtn
                class={arrayheading.class}
                />
     });

export default socialiconlist; 