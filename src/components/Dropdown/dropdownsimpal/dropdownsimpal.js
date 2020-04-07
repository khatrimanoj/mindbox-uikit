import React, { Component } from 'react';
import PropTypes from 'prop-types';

class dropdownsimpal extends Component {
 
  static propTypes = {
    list: PropTypes.array.isRequired
  };
  static defaultProps = {
    list: []
  };
  
  constructor(props) {
    super(props);    
    this.state = {
      isOpen: false,
      labelItem: null,
      typeDropdown: null,
      search: true
    };
  }

  componentWillMount() {
    const { label } = this.props.list[0];
    let firstItem = null;    
    if (typeof label != 'undefined') {
      this.checkType(false);
      firstItem = label;
    } else {
      this.checkType(true);
      firstItem = this.props.list[0];
    }        
    this.setState({
        labelItem: firstItem
    });    
  }
  checkType = (value) => {
    this.setState({
        typeDropdown: value
    });    
  };
  showDropdown = () => {
    this.setState({ isOpen: true });
    document.addEventListener("click", this.hideDropdown);
  };
  hideDropdown = () => {
    this.setState({ isOpen: false });
    document.removeEventListener("click", this.hideDropdown);
  };
  chooseItem = (value) => {    
    if (this.state.labelItem !== value) {
      this.setState({
        labelItem: value      
      })
    }    
  };
  
  renderDataDropDown = (item, index) => {    
    const {value, label} = this.state.typeDropdown ? {value: index, label: item} : item;    
    return (
      <li
        key={index}
        value={value}
        onClick={() => this.chooseItem(label)}
      >
        <a>{label}</a>
      </li> 
    )
  };
    render() {
     
      const { list,size,border } = this.props; 
      const dropdownClassname = `
      dropdown
      ${size === 'lg' && 'lg-dropdown'}
      `;   
      const  dropdowntoggleclass = `
      dropdown-toggle
      ${border === 'false' && 'bordernone'}
      `;   
     
        return (
           <div className={ `${dropdownClassname} ${this.state.isOpen ? 'open' : ''}`}>
               <button className={dropdowntoggleclass} type="button" onClick={this.showDropdown}>
                  {this.state.labelItem}
                 <span className="caret"></span>
               </button>
               <ul className="dropdown-menu">
                 {list.map(this.renderDataDropDown)}
               </ul>
           </div>
        );
    }
}

export default dropdownsimpal;