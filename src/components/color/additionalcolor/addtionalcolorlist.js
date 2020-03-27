import React from 'react';
import Addtionalcolor from './additionalcolor';

const addtionalcolorlist = (props) => props.addtionalcolor.map((arrayheading) =>{
        return  <Addtionalcolor
                title={arrayheading.title}
                colorcode={arrayheading.colorcode}
                class={arrayheading.class}
                />
     });

export default addtionalcolorlist; 