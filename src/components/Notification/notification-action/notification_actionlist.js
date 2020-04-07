import React from 'react';
import Notificationactionlist from './notification_action';

const notification_actionlist = (props) => props.notification_actionlist.map((arrayheading) =>{
        return  <Notificationactionlist
                   grid={arrayheading.grid}
                   class={arrayheading.class}
                   title={arrayheading.title}
                   action={arrayheading.action}
                />
     });

export default notification_actionlist; 