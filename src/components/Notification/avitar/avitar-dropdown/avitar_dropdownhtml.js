import React, { Component } from 'react';
import PropTypes from 'prop-types';

class input_html extends Component {
    static propTypes = {
        hasDropdown: PropTypes.bool,
        hasRound: PropTypes.bool,
        haslg: PropTypes.bool,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        avitar: PropTypes.bool,
        
      };
      static defaultProps = {
        hasError: false,
        hassuccess: false,
        type: 'default',
      };

    render() {
      
        const { id,title,haslg,hasDropdown,subtitle,hasRound,avitar,...inputProps } = this.props;
        const avitarClassname = `
        avitar-label align-items-center
       
          ${hasDropdown && 'dropdown'}
          ${hasRound && 'round'}
          ${haslg && 'lg'}
         
         
        `;
        
        
        
       
        return (
                      <div className={avitarClassname}>
                         <div className="icon avitar">
                             <div className="tbl">
                                 <div className="tbl-cell">
                                 {this.props.children}
                                 </div>
                             </div>
                           
                         </div>
                         <div className="avitartitle">
                                 <div className="body2">{title}</div>
                                 <p className="text-gray caption">{subtitle}</p>
                         </div>
                     </div>
        );
    }
}

export default input_html;