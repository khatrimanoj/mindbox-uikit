import React from 'react';
import Shedows from './shadow';

const addtionalcolorlist = (props) => props.shadow.map((arrayheading) =>{
        return  <Shedows
                title={arrayheading.title}
                class={arrayheading.class}
                />
     });
  
export default addtionalcolorlist; 