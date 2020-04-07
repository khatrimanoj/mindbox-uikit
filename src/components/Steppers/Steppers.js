import React, { Component } from 'react';
import Header from '../header/header';
import LinerSteppers from '../Steppers/linnersteppers/Linear_stepper';
import NonLinerSteppers from '../Steppers/nonlinnersteppers/nonlinnersteppers';
import VerticalSteppers from '../Steppers/verticalsteppers/verticalsteppers';
import { Icon } from 'react-icons-kit';
import {shoppingBag} from 'react-icons-kit/feather/shoppingBag';
import {truck} from 'react-icons-kit/feather/truck';
import {check} from 'react-icons-kit/feather/check';
import {creditCard} from 'react-icons-kit/feather/creditCard'

class Steppers extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
             header: [
                 {title: 'Steppers'}
             ],
         }
    }
    
    render() {
        const steps = [
            {
                stapname: '1',
                title: 'Select settings',
                subtitle: 'Assistive text',
                component: <div>this is step 1 and it is good</div>,
                exitValidation: false
            },
            {
                stapname: '2',
                title: 'Create a collection',
                subtitle: 'Assistive text',
              component: <div>this is step 2 and it is even better</div>
            },
            {
                stapname: '3',
                title: 'Create an element',
                subtitle: 'Assistive text',
              component: <div>this is step 3 and... WOW</div>
            }
          ]
          const steps2 = [
            {
                stapname: '1',
                title: 'Select settings',
                subtitle: '',
                component: <div>this is step 1 and it is good</div>,
                exitValidation: false
            },
            {
                stapname: '2',
                title: 'Create a collection',
                subtitle: '',
              component: <div>this is step 2 and it is even better</div>
            },
            {
                stapname: '3',
                title: 'Create an element',
                subtitle: '',
              component: <div>this is step 3 and... WOW</div>
            }
          ]
          const steps3 = [
            {
                stapname: <Icon icon={shoppingBag} size={20} />,
                title: 'Shopping Bag',
                subtitle: 'Step 1',
                component: <div>this is step 1 and it is good</div>,
                exitValidation: false
            },
            {
                stapname: <Icon icon={truck} size={20} />,
                title: 'Delivery',
                subtitle: 'Step 2',
              component: <div>this is step 2 and it is even better</div>
            },
            {
                stapname: <Icon icon={creditCard} size={20} />,
                title: 'Payment',
                subtitle: 'Step 3',
              component: <div>this is step 3 and... WOW</div>
            },
            {
                stapname: <Icon icon={check} size={20} />,
                title: 'Confirmation',
                subtitle: 'Step 4',
              component: <div>this is step 4 and... WOW</div>
            }
          ]
          const steps4 = [
            {
                stapname: <Icon icon={shoppingBag} size={20} />,
                title: 'Shopping Bag',
                subtitle: '',
                component: <div>this is step 1 and it is good</div>,
                exitValidation: false
            },
            {
                stapname: <Icon icon={truck} size={20} />,
                title: 'Delivery',
                subtitle: '',
              component: <div>this is step 2 and it is even better</div>
            },
            {
                stapname: <Icon icon={creditCard} size={20} />,
                title: 'Payment',
                subtitle: '',
              component: <div>this is step 3 and... WOW</div>
            },
            {
                stapname: <Icon icon={check} size={20} />,
                title: 'Confirmation',
                subtitle: '',
              component: <div>this is step 4 and... WOW</div>
            }
          ]
          
        return (
            
             <div className="wrapper">
                 <section className="container">
                     <div className="row">
                         <Header header={this.state.header[0].title} />
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Horizontal Steppers</div>
                             <p class="body1">Linear stepper</p>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <div className="col-md-8">
                                      <LinerSteppers steps={steps} action="false"/>
                                 </div>
                                 <div className="col-md-8">
                                      <LinerSteppers steps={steps} size="lg" action="false"/>
                                 </div>
                                 <div className="col-md-8">
                                      <LinerSteppers steps={steps2} size="sm" action="false"/>
                                 </div>
                                 <div className="col-md-10">
                                      <LinerSteppers steps={steps3} style="line"  action="false"/>
                                 </div>
                                 <div className="col-md-10">
                                      <LinerSteppers steps={steps3} style="line"  size="lg" action="false"/>
                                 </div>
                                 <div className="col-md-10">
                                      <LinerSteppers steps={steps4} style="text"  size="lg" action="false"/>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             
                             <p class="body1">Non Linear stepper</p>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <div className="col-md-8">
                                      <NonLinerSteppers steps={steps} action="false"/>
                                 </div>
                                 <div className="col-md-8">
                                      <NonLinerSteppers steps={steps} size="lg" action="false"/>
                                 </div>
                               
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                               <div className="h5 mb-20">Vertical Steppers</div>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <div className="col-md-6">
                                     <VerticalSteppers steps={steps} size="lg" action="true"/> 
                                 </div>
                                 <div className="col-md-6">
                                     <VerticalSteppers steps={steps} size="sm" action="true"/> 
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section>
             </div>
        );
    }
}

export default Steppers;