import React from 'react';
import Colorbox from './colorbox';

const Listbaslinecolor = (props) => props.baselinecolor.map((arrayheading) =>{
        return  <Colorbox
                title={arrayheading.title}
                colorcode={arrayheading.colorcode}
                class={arrayheading.class}
                />
     });

export default Listbaslinecolor; 
