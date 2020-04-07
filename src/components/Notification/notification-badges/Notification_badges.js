import React from 'react';
import { Icon } from 'react-icons-kit';


const Notification_badges = (props) => 
{
        let badges = [];
        for (let i=0; i <= 0; i++)
        {
            badges.push( 
               
                <div className={["badges " + props.class]}>
                       <Icon icon={props.icondefine} size={20} />
                    <div className="Count">
                        {props.count}
                    </div>
                </div>
           
            )
        }
        return (
           
           <li>
              {badges}
           </li>
             
        );
}


export default Notification_badges;