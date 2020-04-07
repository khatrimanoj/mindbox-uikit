import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Linear_stepper extends Component {
    static propTypes = {
       
        action: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        style:PropTypes.string.isRequired,
      };
    constructor() {
        super();
        
        this.state = { activeStep: 0 };
      }
      
      
      handleStepChange(activeStep) {
      
          this.setState({activeStep}); 
        
      }
     
      
      nextStep () {
        if (this.state.activeStep < this.props.steps.length - 1) {
          this.setState({ activeStep: this.state.activeStep + 1 });    
        }
       
      }
      
      
      previousStep() {
        if (this.state.activeStep > 0) {
          this.setState({ activeStep: this.state.activeStep - 1 });    
        }
      }
    render() {
        const { action,size,style, ...inputProps } = this.props;
        const stepper_inner = `
        stepper-inner
       
        ${size === 'sm' && 'sm-stepper'}
          ${size === 'lg' && 'lg-stepper'}
          ${style === 'line' && 'line-stepper'}
          ${style === 'text' && 'text-stepper'}
        `;
        const actionClassname = `
        stepper-actions
       
          ${action === 'true' && 'show'}
          ${action === 'false' && 'hidden'}
         
        `;
        const { steps, onFinish } = this.props;
        const { activeStep } = this.state;
        const stepIndicators = steps.map((step, i) => {
          return (
            <div  className={stepper_inner}  onClick={ () => this.handleStepChange(i)}>
              <div className={`stepper-number ${activeStep === i && 'active'} ${activeStep > i && 'active done '}`}>
                <span>{step.stapname}</span>
                <div className="line-linkage"></div>
              </div>
    
          {i !== steps.length && <div className="stepper-label"><div>{step.title}</div><p>{step.subtitle}</p></div>}
            </div>
           );
        });
        
        return (
            <div className="stepper">
            <div className="stepper-indicator">
              {stepIndicators}
            </div>
            <div className="stepper-steps">
              {steps[activeStep].component}
            </div>
            <div className={actionClassname} >
              <button onClick={() => this.previousStep()}>Previous</button>
              {activeStep === steps.length - 1 ?
                <button disabled={!!steps[activeStep].exitValidation} onClick={onFinish}>Submit</button> : 
                <button disabled={!!steps[activeStep].exitValidation} onClick={() => this.nextStep()}>Next</button>}
            </div>
          </div>
        );
    }
}

export default Linear_stepper;