import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';


class tooltipicon extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          displayIconTooltip: false
        }
        this.hideTooltip = this.hideTooltip.bind(this)
        this.showTooltip = this.showTooltip.bind(this)
      }
      
      hideTooltip () {
        this.setState({displayIconTooltip: false})
        
      }
      showTooltip () {
        this.setState({displayIconTooltip: true})
      }
    
    render() {
        let message = this.props.message
        let position = this.props.position
        let type = this.props.type
        
        let iconbox = this.props.iconbox
        return (
            <span className='tooltip icon' onMouseLeave={this.hideTooltip} >
            {this.state.displayIconTooltip &&
            <div className={`tooltip-bubble tooltip-${position}`}>
                <div className={`tooltip-icon ${type}`}><Icon icon={iconbox}  /></div>
            <div className={`tooltip-message ${type}`}>{message}</div>
            </div>
            }
            <span 
            className='tooltip-trigger'
            onMouseOver={this.showTooltip}
            >
            {this.props.children}
            </span>
        </span>
        );
    }
}

export default tooltipicon;