import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkboxdone extends Component {
  static propTypes = {
    hasError: PropTypes.bool,
    id: PropTypes.string.isRequired,
    indeterminate: PropTypes.bool,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'switch']),
  };
  static defaultProps = {
    hasError: false,
    indeterminate: undefined,
    type: 'default',
  };

  componentDidMount() {
    // Apply the indeterminate attribute of the checkbox input
    this.selector.indeterminate = this.props.indeterminate;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.selector.indeterminate = this.props.indeterminate;
    }
  }
    
    render() {

        const { id, label, type, color, indeterminate, hasError, ...inputProps } = this.props;
    const checkboxClassname = `
    m-checkbox 
      ${type === 'switch' && 'm-checkbox--switch'}
      ${hasError && 'm-checkbox--has-error'}
    `;
    
    const inputClassname = `
      m-checkbox__input
     
      ${type === 'switch' && 'm-checkbox--switch__input'}
      ${hasError && 'm-checkbox--has-error__input'}
      ${color === 'red' && 'c-red'}
      ${color === 'orange' && 'c-orange'}
      ${color === 'yellow' && 'c-yellow'}
      ${color === 'la-rioja' && 'c-la-rioja'}
      ${color === 'green' && 'c-green'}
      ${color === 'pelorous' && 'c-pelorous'}
      ${color === 'daisy-bush' && 'c-daisy-bush'}
      ${color === 'violet' && 'c-violet'}
      ${color === 'mulberry' && 'c-mulberry'}
      ${color === 'korma' && 'c-korma'}
      ${color === 'buttercup' && 'c-buttercup'}
      ${color === 'primary-variant' && 'c-primary-variant'}
      ${color === 'secondary' && 'c-secondary'}
      ${color === 'secondary-variant' && 'c-secondary-variant'}
      ${color === 'dark-bg' && 'c-dark-bg'}
      ${color === 'dark-bg-variant' && 'c-dark-bg-variant'}
      ${color === 'black' && 'c-black'}
       ${color === 'gray' && 'c-gray'}
      

   
     
    `;
    
    const labelClassname = `
      m-checkbox__label
      ${type === 'switch' && 'm-checkbox--switch__label'}
    `;
        return (
            <>
               <div className="col-md-3">
                 <div className={checkboxClassname}>
                    <input
                      type="checkbox"
                      className={inputClassname}
                      ref={el => (this.selector = el)}
                      id={id}
                      {...inputProps}
                    />
                      <label className={labelClassname} htmlFor={id}>{label}</label>
                 </div>
               </div>
            </>
        ); 
    }
}

export default Checkboxdone;
