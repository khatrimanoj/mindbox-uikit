import React, { Component } from 'react';

class text_tbody extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
          tblhead: [
              {
                  title: 'H1',
                  title1: 'Size: 96pt',
                  title2: 'Line: 96pt',
                  primary: 'h1 text-primary',
                  Secondary: 'h1 text-secondary',
                  Primary_Variant: 'h1 text-primary-variant',
                  white: 'h1 text-white',
                  black: 'h1 text-black',
                  gray: 'h1 text-gray',
                  light_gray: 'h1 text-light-gray'
              },
              {
                title: 'H2',
                title1: 'Size: 60pt',
                title2: 'Line: 64pt',
                primary: 'h2 text-primary',
                Secondary: 'h2 text-secondary',
                Primary_Variant: 'h2 text-primary-variant',
                white: 'h2 text-white',
                black: 'h2 text-black',
                gray: 'h1 text-gray',
                light_gray: 'h1 text-light-gray'
            },
            {
                title: 'H3',
                title1: 'Size: 48pt',
                title2: 'Line: 56pt',
                primary: 'h3 text-primary',
                Secondary: 'h3 text-secondary',
                Primary_Variant: 'h3 text-primary-variant',
                white: 'h3 text-white',
                black: 'h3 text-black',
                gray: 'h3 text-gray',
                light_gray: 'h2 text-light-gray'
            },
            {
                title: 'H4',
                title1: 'Size: 32pt',
                title2: 'Line: 40pt',
                primary: 'h4 text-primary',
                Secondary: 'h4 text-secondary',
                Primary_Variant: 'h4 text-primary-variant',
                white: 'h4 text-white',
                black: 'h4 text-black',
                gray: 'h4 text-gray',
                light_gray: 'h4 text-light-gray'
            },
            {
                title: 'H5',
                title1: 'Size: 24pt',
                title2: 'Line: 32pt',
                primary: 'h5 text-primary',
                Secondary: 'h5 text-secondary',
                Primary_Variant: 'h5 text-primary-variant',
                white: 'h5 text-white',
                black: 'h5 text-black',
                gray: 'h5 text-gray',
                light_gray: 'h5 text-light-gray'
            },
            {
                title: 'H6',
                title1: 'Size: 20pt',
                title2: 'Line: 28pt',
                primary: 'h6 text-primary',
                Secondary: 'h6 text-secondary',
                Primary_Variant: 'h6 text-primary-variant',
                white: 'h6 text-white',
                black: 'h6 text-black',
                gray: 'h6 text-gray',
                light_gray: 'h6 text-light-gray'
            },
            {
                title: 'H6',
                title1: 'Size: 20pt',
                title2: 'Line: 28pt',
                primary: 'h6 text-primary',
                Secondary: 'h6 text-secondary',
                Primary_Variant: 'h6 text-primary-variant',
                white: 'h6 text-white',
                black: 'h6 text-black',
                gray: 'h6 text-gray',
                light_gray: 'h6 text-light-gray'
            },
            {
                title: 'Subtitle 1',
                title1: 'Size: 20pt',
                title2: 'Line: 28pt',
                primary: 'subtitle1 text-primary',
                Secondary: 'subtitle1 text-secondary',
                Primary_Variant: 'subtitle1 text-primary-variant',
                white: 'subtitle1 text-white',
                black: 'subtitle1 text-black',
                gray: 'subtitle1 text-gray',
                light_gray: 'subtitle1 text-light-gray'
            },
            {
                title: 'Subtitle 2',
                title1: 'Size: 20pt',
                title2: 'Line: 28pt',
                primary: 'subtitle2 text-primary',
                Secondary: 'subtitle2 text-secondary',
                Primary_Variant: 'subtitle2 text-primary-variant',
                white: 'subtitle2 text-white',
                black: 'subtitle2 text-black',
                gray: 'subtitle2 text-gray',
                light_gray: 'subtitle2 text-light-gray'
            },
            {
                title: 'Body 1',
                title1: 'Size: 20pt',
                title2: 'Line: 28pt',
                primary: 'body1 text-primary',
                Secondary: 'body1 text-secondary',
                Primary_Variant: 'body1 text-primary-variant',
                white: 'body1 text-white',
                black: 'body1 text-black',
                gray: 'body1 text-gray',
                light_gray: 'body1 text-light-gray'
            },
            {
                title: 'Body 2',
                title1: 'Size: 20pt',
                title2: 'Line: 28pt',
                primary: 'body2 text-primary',
                Secondary: 'body2 text-secondary',
                Primary_Variant: 'body2 text-primary-variant',
                white: 'body2 text-white',
                black: 'body2 text-black',
                gray: 'body2 text-gray',
                light_gray: 'body2 text-light-gray'
            },
            {
                title: 'Button 1',
                title1: 'Size: 20pt',
                title2: 'Line: 28pt',
                primary: 'button1 text-primary',
                Secondary: 'button1 text-secondary',
                Primary_Variant: 'button1 text-primary-variant',
                white: 'button1 text-white',
                black: 'button1 text-black',
                gray: 'button1 text-gray',
                light_gray: 'button1 text-light-gray'
            },
            {
                title: 'Button 2',
                title1: 'Size: 20pt',
                title2: 'Line: 28pt',
                primary: 'button2 text-primary',
                Secondary: 'button2 text-secondary',
                Primary_Variant: 'button2 text-primary-variant',
                white: 'button2 text-white',
                black: 'button2 text-black',
                gray: 'button2 text-gray',
                light_gray: 'button2 text-light-gray'
            },
            {
                title: 'Caption',
                title1: 'Size: 20pt',
                title2: 'Line: 28pt',
                primary: 'caption text-primary',
                Secondary: 'caption text-secondary',
                Primary_Variant: 'caption text-primary-variant',
                white: 'caption text-white',
                black: 'caption text-black',
                gray: 'caption text-gray',
                light_gray: 'caption text-light-gray'
            },
            {
                title: 'OVERLINE',
                title1: 'Size: 20pt',
                title2: 'Line: 28pt',
                primary: 'overline text-primary',
                Secondary: 'overline text-secondary',
                Primary_Variant: 'overline text-primary-variant',
                white: 'overline text-white',
                black: 'overline text-black',
                gray: 'overline text-gray',
                light_gray: 'overline text-light-gray'
            },
              
            ]
        }
       
    }
    render() {
        return (
            <>
              {
                 this.state.tblhead.map((rowdata,i) =>
                 <tr>
                    <td>
                         <p className="overline text-light-gray w-100 mb-10">{rowdata.title}</p>
                         <p className="body2 text-black w-100">{rowdata.title1}</p>
                         <p className="body2 text-black w-100">{rowdata.title2}</p>
                     </td>
                     <td>
                         <p className={rowdata.primary}>Aa</p>
                     </td>
                     <td>
                         <p className={rowdata.Secondary}>Aa</p>
                     </td>
                     <td className="bg-dark-bg">
                         <p className={rowdata.Primary_Variant}>Aa</p>
                     </td>
                     <td className="bg-primary">
                         <p className={rowdata.white}>Aa</p>
                     </td>
                     <td>
                         <p className={rowdata.black}>Aa</p>
                     </td>
                     <td>
                         <p className={rowdata.black}>Aa</p>
                     </td>
                     <td>
                         <p className={rowdata.gray}>Aa</p>
                     </td>
                     <td>
                         <p className={rowdata.light_gray}>Aa</p>
                     </td>
                 </tr>
                )
           }
            </>
        );
    }
}

export default text_tbody;