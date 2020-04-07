import React, { Component } from 'react';
import Header from '../header/header';
import Notificationalert from './notification-alert/notification_alert_list';
import Notification_actionlist from './notification-action/notification_actionlist';
import Notification_captionlist from './notification-caption/notification_captionlist';
import Notificationbadgeslist from './notification-badges/Notification_badgeslist';
import Tooltip from './tooltip/tooltip';
import Avitar from './avitar/avitar';

import {alertTriangle} from 'react-icons-kit/feather/alertTriangle';
import {checkCircle} from 'react-icons-kit/feather/checkCircle';
import {alertCircle} from 'react-icons-kit/feather/alertCircle';
import {ic_help_outline} from 'react-icons-kit/md/ic_help_outline';

import {ic_check_circle} from 'react-icons-kit/md/ic_check_circle';
import {ic_report_problem} from 'react-icons-kit/md/ic_report_problem';
import {ic_error} from 'react-icons-kit/md/ic_error';
import {star} from 'react-icons-kit/feather/star';
import {mail} from 'react-icons-kit/feather/mail';
import {shoppingBag} from 'react-icons-kit/feather/shoppingBag'



class notification extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
           header: [
              {title: 'Notification'}
            ],
             notificationalert: [
                 {
                     class: 'info-bg-alert z2',
                     icondefine: ic_help_outline,
                     title: 'This is an information message'

                 },
                 {
                     class: 'warning-bg-alert z2',
                     icondefine: alertTriangle,
                     title: 'This is a warning message'
                 },
                 {
                     class: 'success-bg-alert z2',
                     icondefine: checkCircle,
                     title: 'This is a warning message'
                 },
                 {
                     class: 'error-bg-alert z2',
                     icondefine: alertCircle,
                     title: 'This is a warning message'
                 },
                {
                    class: 'info-alert z2',
                    icondefine: ic_help_outline,
                    title: 'This is an information message'

                },
                {
                    class: 'warning-alert z2',
                    icondefine: alertTriangle,
                    title: 'This is a warning message'
                },
                {
                    class: 'success-alert z2',
                    icondefine: checkCircle,
                    title: 'This is a warning message'
                },
                {
                    class: 'error-alert z2',
                    icondefine: alertCircle,
                    title: 'This is a warning message'
                },
                {
                    class: 'info-bg-alert lg-alert z2',
                    icondefine: ic_help_outline,
                    title: 'This is an information message'

                },
                {
                    class: 'warning-bg-alert lg-alert z2',
                    icondefine: alertTriangle,
                    title: 'This is a warning message'
                },
                {
                    class: 'success-bg-alert lg-alert z2',
                    icondefine: checkCircle,
                    title: 'This is a warning message'
                },
                {
                    class: 'error-bg-alert lg-alert z2',
                    icondefine: alertCircle,
                    title: 'This is a warning message'
                },
               {
                   class: 'info-alert lg-alert z2',
                   icondefine: ic_help_outline,
                   title: 'This is an information message'

               },
               {
                   class: 'warning-alert lg-alert z2',
                   icondefine: alertTriangle,
                   title: 'This is a warning message'
               },
               {
                   class: 'success-alert lg-alert z2',
                   icondefine: checkCircle,
                   title: 'This is a warning message'
               },
               {
                   class: 'error-alert lg-alert z2',
                   icondefine: alertCircle,
                   title: 'This is a warning message'
               },
            ],
            notificationalert_list: [
                {
                    grid : 'col-md-6',
                    class: ' z2',
                    title: 'You file has been deleted',
                    action: 'UNDO'

                },
                {
                    grid : 'col-md-6',
                    class: 'dark-bg-alert z2',
                    title: 'You file has been deleted',
                    action: 'UNDO'
                },
                {
                    grid : 'col-md-12',
                    class: 'dark-bg-alert z2',
                    title: 'This website uses cookies. By using the website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.',
                    action: 'Got it'
                },
                {
                    grid : 'col-md-6',
                    class: 'lg-alert z2',
                    title: 'You file has been deleted',
                    action: 'UNDO'

                },
                {
                    grid : 'col-md-6',
                    class: 'lg-alert dark-bg-alert z2',
                    title: 'You file has been deleted',
                    action: 'UNDO'
                },
                {
                    grid : 'col-md-12',
                    class: 'lg-alert dark-bg-alert z2',
                    title: 'This website uses cookies. By using the website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.',
                    action: 'Got it'
                },
            ],
            Notification_captionlist: [
                {
                    class: 'info-alert z2',
                    title: 'Information message',
                    iconalert: ic_help_outline,
                    subtitle: 'Just now'
                },
                {
                    class: 'warning-alert z2',
                    iconalert: ic_report_problem,
                    title: 'Warning message',
                    subtitle: '500 MB left'
                },
                {
                    class: 'success-alert z2',
                    iconalert: ic_check_circle,
                    title: 'Success message',
                    subtitle: '13 files archived'
                },
                {
                    class: 'error-alert z2',
                    iconalert: ic_error,
                    title: 'Error message',
                    subtitle: '2 min ago'
                },
                {
                    class: 'lg-alert info-alert z2',
                    title: 'Information message',
                    iconalert: ic_help_outline,
                    subtitle: 'Just now'
                },
                {
                    class: 'lg-alert warning-alert z2',
                    iconalert: ic_report_problem,
                    title: 'Warning message',
                    subtitle: '500 MB left'
                },
                {
                    class: 'lg-alert success-alert z2',
                    iconalert: ic_check_circle,
                    title: 'Success message',
                    subtitle: '13 files archived'
                },
                {
                    class: 'lg-alert error-alert z2',
                    iconalert: ic_error,
                    title: 'Error message',
                    subtitle: '2 min ago'
                },
               
           ],
           notification_badges: [
            
                {
                    class: '',
                    icondefine: shoppingBag,
                    count: '10',
                },
                 {
                    class: '',
                    icondefine: star,
                    count: '3',
                 },
                 {
                    class: '',
                    icondefine: mail,
                    count: '28',
                 },
           ],
        }
    }
    render() {
        return (
             <div className="wrapper">
                 <section className="container">
                     <div className="row">
                         <Header header={this.state.header[0].title} />
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Notifications</div>
                              <p className="body1">Notifications provide brief messages about different processes.</p>
                         </div>
                         <div className="container mb-50">
                             <div className="row">
                                 <Notificationalert notification_alert={this.state.notificationalert}/>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                              <p className="body1">Notification with action button.</p>
                         </div>
                         <div className="container mb-50">
                             <div className="row">
                                 <Notification_actionlist notification_actionlist={this.state.notificationalert_list}/>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                              <p className="body1">Notification with action button.</p>
                         </div>
                         <div className="container mb-50">
                             <div className="row">
                                 <Notification_captionlist Notification_captionlistmsg={this.state.Notification_captionlist}/>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                              <p className="body1">Notification badges.</p>
                         </div>
                         <div className="container mb-50">
                             <div className="row">
                                 <ul className="btn-list">
                                 <Notificationbadgeslist notification_badges_list={this.state.notification_badges}/>
                                 </ul>
                                
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                               <div className="h5 mb-20">Tooltip</div>
                              <p className="body1">Tooltip displays informative message on hover or tap action.</p>
                         </div>
                         <div className="container mb-50">
                             <div className="row">
                                 <Tooltip/>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                               <div className="h5 mb-20">Avatars</div>
                              <p className="body1">Avatar is the graphical representation of the user.</p>
                         </div>
                         <div className="container mb-50">
                             <div className="row">
                               <Avitar/>  
                             </div>
                         </div>
                     </div>
                 </section>
             </div>
        );
    }
}

export default notification;