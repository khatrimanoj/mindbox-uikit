import React, { Component } from 'react';
import PropTypes from 'prop-types';

class input_html extends Component {
    static propTypes = {
        hasError: PropTypes.bool,
        hassuccess: PropTypes.bool,
        id: PropTypes.string.isRequired,
        disabled: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        msg: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        placeholder:PropTypes.string.isRequired,
      };
      static defaultProps = {
        hasError: false,
        hassuccess: false,
        type: 'default',
        size: 'default',
      };

    render() { 
      
        const { id,value,label,hassuccess,disabled,msg,placeholder,size,hasError,iconaling, ...inputProps } = this.props;
        const checkboxClassname = `
        form-group placeholder-label
       
          ${hasError && 'error'}
          ${hassuccess && 'success'}
          ${size === 'lg' && 'lg-input'}
          ${iconaling === 'left' && 'left-icon'}
          ${iconaling === 'right' && 'right-icon'}
        `;
        
        const inputClassname = `
          m-radio__input
         
         
          ${hasError && 'm-checkbox--has-error__input'}
        `;
        
        const labelClassname = `
        form-group placeholder-label
        ${size === 'lg' && 'lg-input'}
        ${iconaling === 'left' && 'left-icon'}
        ${iconaling === 'right' && 'right-icon'}
      `;
      // let inputlable = [];
      // if(this.props.label === null)
      // {
        
        
        
      //     inputlable.push(
            
            
      //      )
      // } 
      // if(this.props.label !== null)
      // {
      //   inputlable.push(
         
         
      //    )
        
      // }
    
        return (
          
                 <div className={checkboxClassname}>
                        <input type="text" required value={value} disabled={disabled} placeholder={placeholder} />
                       
                              <label>{label}</label>
                       
                        {this.props.children}
                        
                        <p className="message">{msg}</p>
                    </div>
            
        );
    }
}

export default input_html;