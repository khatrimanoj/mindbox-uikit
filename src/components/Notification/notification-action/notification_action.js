import React, { Component } from 'react';


const notification_action = (props) => 
{
        let alert_action = [];
        for (let i=0; i <= 0; i++)
        {
            alert_action.push(
                <div className=" " className={["mb-30 " + props.grid]}>
                <div className={["alert " + props.class]}>
                    <div className="alert-msg">
                        {props.title}
                     </div>
                     <div className="alert-cancel">
                         <a className="text-primary button1">{props.action}</a>
                     </div>
                </div>
            </div>
            )
        }
        return (
           <>
             {alert_action}
           </>
        );
}


export default notification_action;