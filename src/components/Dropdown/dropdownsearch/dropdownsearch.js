import React, { Component } from 'react';
import PropTypes from 'prop-types';

class dropdownsearch extends Component {
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
          searchString: '',
          autoFocus: true
         
        };
        this.inputRef = React.createRef();
        this.showDropdown = this.showDropdown.bind(this);


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
      componentDidUpdate() {
        this.inputRef.current.focus();
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
     
   handleChange = (e) => {
     this.setState({ searchString: e.target.value });
   }
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
       /* searching code start here*/ 
       var libraries = list,
       searchString = this.state.searchString.trim().toLowerCase();
   if (searchString.length > 0) {
     libraries = libraries.filter(function(i) {
       return i.label.toLowerCase().match( searchString );
     });
   }
        return (
          <div className={ ` ${dropdownClassname} ${this.state.isOpen ? 'open' : ''}`} >
            <button className={dropdowntoggleclass} type="button" onClick={this.showDropdown}>
               {this.state.labelItem}
              
            </button>
            
            <ul className="dropdown-menu">
                <li>
                <input type="text"  value={this.state.searchString} ref={this.inputRef} onChange={this.handleChange} placeholder="Type here..."/>
                </li>
              {libraries.map(this.renderDataDropDown)}
            </ul>
          </div>
        );
    }
}

export default dropdownsearch;