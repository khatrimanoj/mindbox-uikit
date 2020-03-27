import React from 'react';
import Heading from './heading';

const Listheading = (props) => props.heading.map((arrayheading, index) =>{
        return  <Heading 
                    key={arrayheading.index}
                    title={arrayheading.title} 
                    class={arrayheading.class}
                    content={arrayheading.content}
                />
                
     });

export default Listheading; 


 