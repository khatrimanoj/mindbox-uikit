import React from 'react';
import { Icon } from 'react-icons-kit';
import {x} from 'react-icons-kit/feather/x';


const notification_caption = (props) => 
{
        let caption = [];
        for (let i=0; i <= 0; i++)
        {
            caption.push(
                <div className="col-md-3 mb-30">
                <div className={["alert " + props.class]}>
                    <div className="alert-icon">
                       <Icon icon={props.iconalert} size={20} />
                    </div>
                    <div className="alert-msg">
                        {props.title}
                        <p className="text-gray caption">{props.subtitle}</p>
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
             {caption}
           </>
        );
}


export default notification_caption;