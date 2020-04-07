import React, { Component } from 'react';

class text_thade extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
          tblhead: [
              {
                  title: '',
                  title1: ''
              },
              {
                  title: 'COLOR',
                  title1: 'Primary'
              },
              {
                title: 'COLOR',
                title1: 'Secondary'
              },
              {
                title: 'COLOR',
                title1: 'Primary Variant'
              },
              {
                title: 'COLOR',
                title1: 'White'
              },
              {
                title: 'COLOR',
                title1: 'Black'
              },
              {
                title: 'COLOR',
                title1: 'Grey'
              },
              {
                title: 'COLOR',
                title1: 'Grey'
              },
              {
                title: 'COLOR',
                title1: 'Light Grey'
              },
            ]
        }
       
    }
       
    render() {
        return (
            
            <tr>
            {
                this.state.tblhead.map((rowdata,i) =>
                   <td>
                      <p className="overline text-light-gray w-100">{rowdata.title}</p>
                      <p className="body2 text-black w-100">{rowdata.title1}</p>
                   </td>
                )
           }
          
      </tr>
        );
    }
}

export default text_thade;