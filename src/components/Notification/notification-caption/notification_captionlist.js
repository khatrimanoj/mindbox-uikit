import React from 'react';
import Notificationcaption from './notification_caption';

const Notification_captionlist = (props) => props.Notification_captionlistmsg.map((arrayheading) =>{
        return  <Notificationcaption
                   class={arrayheading.class}
                   title={arrayheading.title}
                   iconalert={arrayheading.iconalert}
                   subtitle={arrayheading.subtitle}
                />
     });

export default Notification_captionlist; 