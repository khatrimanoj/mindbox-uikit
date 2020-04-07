import React from 'react';
import { Icon } from 'react-icons-kit';
import {x} from 'react-icons-kit/feather/x';


const notification_alert = (props) => 
{
        let alert = [];
        for (let i=0; i <= 0; i++)
        {
            alert.push( 
                <div className="col-md-6 mb-30">
                <div className={["alert " + props.class]}>
                    <div className="alert-icon">
                       <Icon icon={props.icondefine} size={20} />
                    </div>
                    <div className="alert-msg">
                        {props.title}
                    </div>
                    <div className="alert-cancel">
                       <Icon icon={x} size={20} />

                    </div>

                </div>
            </div>
            )
        }
        return (
           <>
             {alert}
           </>
        );
}


export default notification_alert;