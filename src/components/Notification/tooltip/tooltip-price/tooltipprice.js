import React, { Component } from 'react';

class tooltipprice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          displayTooltip: false
        }
        this.hideTooltip = this.hideTooltip.bind(this)
        this.showTooltip = this.showTooltip.bind(this)
      }
      
      hideTooltip () {
        this.setState({displayTooltip: false})
        
      }
      showTooltip () {
        this.setState({displayTooltip: true})
      }
    render() {
         let message = this.props.message
         let position = this.props.position
         let type = this.props.type
         let date = this.props.date
        return (
             <span className='tooltip'
                    onMouseLeave={this.hideTooltip}
                    >
                    {this.state.displayTooltip &&
                    <div className={`tooltip-bubble tooltip-${position}`}>
                        
                    <div className={`tooltip-message ${type}`}><p className="sub">{date}</p>{message}</div>
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

export default tooltipprice;