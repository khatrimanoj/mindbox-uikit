import React from 'react';
import Notificationalert from './notification_alert';

const notification_alert_list = (props) => props.notification_alert.map((arrayheading) =>{
        return  <Notificationalert
                   class={arrayheading.class}
                   title={arrayheading.title}
                   icondefine={arrayheading.icondefine}
                />
     });

export default notification_alert_list; 