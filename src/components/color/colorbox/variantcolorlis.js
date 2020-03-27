import React from 'react';
import Variantbox from './colorVariant';

const variantcolorlist = (props) => props.variantcolor.map((arrayheading) =>{
        return  <Variantbox
                title={arrayheading.title}
                colorcode={arrayheading.colorcode}
                class={arrayheading.class}
                />
     });

export default variantcolorlist; 