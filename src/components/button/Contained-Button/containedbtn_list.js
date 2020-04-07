import React from 'react';
import Containedbtn from './containedbtn';

const containedbtn = (props) => props.containedbtn.map((arrayheading) =>{
        return  <Containedbtn
                class={arrayheading.class}
                disable={arrayheading.disable}
                />
     });

export default containedbtn; 
