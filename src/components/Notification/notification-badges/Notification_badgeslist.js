import React from 'react';
import Notificationbadges from './Notification_badges';

const Notification_badeslist = (props) => props.notification_badges_list.map((arrayheading) =>{
        return  <Notificationbadges
                   class={arrayheading.class}
                   count={arrayheading.count}
                   icondefine={arrayheading.icondefine}
                />
     });

export default Notification_badeslist; 