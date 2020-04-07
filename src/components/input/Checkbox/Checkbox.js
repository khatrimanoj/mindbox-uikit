import React, { Component } from 'react';
import Chekbox from './chekboxhtml/chekbox';

class Checkbox extends Component {
    

    render() {
        
       
        return (
            <>
              {/* {javascriptpersons} */}
                <Chekbox id="unchecked" label="Unchecked" color="gray" />
                <Chekbox id="checked" label="Checked" checked />
                {/* <Chekbox id="indeterminate" label="Indeterminate" indeterminate />
                <Chekbox id="switch" label="Switch" type="switch" /> */}
                <Chekbox id="hasError" label="Has error" hasError />
                <Chekbox id="disabled" label="Disabled" disabled />
            </>
        );
    }
}

export default Checkbox;
