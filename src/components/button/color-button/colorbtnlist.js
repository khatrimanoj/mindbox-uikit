import React from 'react';
import Colobtn from './colorbtn';

const colorbtnlist = (props) => props.colorbtnlist.map((arrayheading) =>{
        return  <Colobtn
                colorname={arrayheading.colorname}
                class={arrayheading.class}
                />
     });

export default colorbtnlist; 
