import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Radiobtnhtml extends Component {
    static propTypes = {
        hasError: PropTypes.bool,
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      };
      static defaultProps = {
        hasError: false,
        
      };

    
    render() {
        const { id, label,  hasError, ...inputProps } = this.props;
        const checkboxClassname = `
        m-radio 
       
          ${hasError && 'm-checkbox--has-error'}
        `;
        
        const inputClassname = `
          m-radio__input
         
         
          ${hasError && 'm-checkbox--has-error__input'}
        `;
        
        const labelClassname = `
        m-radio__label
      `;
        return (
            <>
              
            <div className={checkboxClassname}>
           
               <input
                 type="radio"
                 className={inputClassname}
                 ref={el => (this.selector = el)}
                 id={id}
                 {...inputProps}
               />
               <label className={labelClassname} htmlFor={id}>{label}</label>      
            </div>
          
       </>
        );
    }
}

export default Radiobtnhtml;