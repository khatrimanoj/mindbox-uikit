import React, { Component } from 'react';
import Header from '../header/header';
import Colorbtnlist from './color-button/colorbtnlist';
import Containbtn from './Contained-Button/containedbtn_list';
import Socialbtn from './social-button/socialiconlist';
import Rdiobtn from './togglebtn/togglbtn';
import Label_button from './label-button/label_button'


class button extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
           header: [
              {title: 'Button'}
            ],
            colorbtn: [
               {
                     colorname: 'Red',
                     class: 'btn-red' 
               },
               {
                     colorname: 'Orange',
                     class: 'btn-orange' 
                },
                {
                     colorname: 'Yellow',
                     class: 'btn-yellow' 
                },
                 {
                    colorname: 'La Rioja',
                    class: 'btn-la-rioja' 
                },
                {
                    colorname: 'Pelorous',
                    class: 'btn-pelorous' 
                },
                {
                   colorname: 'Mulberry',
                   class: 'btn-mulberry' 
               },
               {
                        colorname: 'Red',
                        class: 'btn-red' 
                },
                {
                        colorname: 'Orange',
                        class: 'btn-orange' 
                },
                {
                        colorname: 'Yellow',
                        class: 'btn-yellow' 
                },
                    {
                    colorname: 'La Rioja',
                    class: 'btn-la-rioja' 
                },
                {
                    colorname: 'Pelorous',
                    class: 'btn-pelorous' 
                },
                {
                    colorname: 'Mulberry',
                    class: 'btn-mulberry' 
                },
                {
                    colorname: 'Red',
                        class: 'btn-line-red' 
                },
                {
                        colorname: 'Orange',
                        class: 'btn-line-orange' 
                },
                {
                        colorname: 'Yellow',
                        class: 'btn-line-yellow' 
                },
                    {
                    colorname: 'La Rioja',
                    class: 'btn-line-la-rioja' 
                },
                {
                    colorname: 'Pelorous',
                    class: 'btn-line-pelorous' 
                },
                {
                    colorname: 'Mulberry',
                    class: 'btn-line-mulberry' 
                },
                {
                    colorname: 'Red',
                        class: 'btn-line-red' 
                },
                {
                        colorname: 'Orange',
                        class: 'btn-line-orange' 
                },
                {
                        colorname: 'Yellow',
                        class: 'btn-line-yellow' 
                },
                    {
                    colorname: 'La Rioja',
                    class: 'btn-line-la-rioja' 
                },
                {
                    colorname: 'Pelorous',
                    class: 'btn-line-pelorous' 
                },
                {
                    colorname: 'Mulberry',
                    class: 'btn-line-mulberry' 
                },
            ],
            smcontainbtn:
            [
                {
                    class: 'btn-sm btn-primary',
                    disable: 'btn-sm btn-disable'

                }
            ],
            smlinecontainbtn:
            [
                {
                    class: 'btn-sm btn-line-primary',
                    disable: 'btn-sm btn-line-disable'

                }
            ],
            smtxtcontainbtn:
            [
                {
                    class: 'btn-sm btn-text-primary',
                    disable: 'btn-sm btn-text-disable'

                }
            ],
            mdcontainbtn:
            [
                {
                    class: 'btn-md btn-primary',
                    disable: 'btn-md btn-disable'

                }
            ],
            mdlinecontainbtn:
            [
                {
                    class: 'btn-md btn-line-primary',
                    disable: 'btn-md btn-line-disable'

                }
            ],
            mdtextcontainbtn:
            [
                {
                    class: 'btn-md btn-text-primary',
                    disable: 'btn-md btn-text-disable'

                }
            ],
            lgcontainbtn:
            [
                {
                    class: 'btn-lg btn-primary',
                    disable: 'btn-lg btn-disable'

                }
            ],
            lglinecontainbtn:
            [
                {
                    class: 'btn-lg btn-line-primary',
                    disable: 'btn-lg btn-line-disable'

                }
            ],
            lgtextcontainbtn:
            [
                {
                    class: 'btn-lg btn-text-primary',
                    disable: 'btn-lg btn-text-disable'

                }
            ],
            smsocialbtn:
            [
                {
                    class: 'btn-sm',
                }
                
            ],
            mdsocialbtn:
            [
                {
                    class: 'btn-sm',
                }
                
            ]
           
          
        }
       
  
    }   
    render() {
        return (
            <div className="wrapper">
                 <section className="container">
                     <div className="row">
                         <Header header={this.state.header[0].title} />
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Contained Button</div>
                              <p className="body1">Used for maximum emphasis.</p>
                         </div>
                         <div className="container">
                             <div className="row">
                                   <Containbtn containedbtn={this.state.smcontainbtn}/>
                                   <Containbtn containedbtn={this.state.mdcontainbtn}/>
                                   <Containbtn containedbtn={this.state.lgcontainbtn}/>
                             </div>
 
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Outlined Button</div>
                              <p className="body1">Used for medium emphasis.</p>
                         </div>
                         <div className="container">
                             <div className="row">
                                   <Containbtn containedbtn={this.state.smlinecontainbtn}/>
                                   <Containbtn containedbtn={this.state.mdlinecontainbtn}/>
                                   <Containbtn containedbtn={this.state.lglinecontainbtn}/>
                             </div>
 
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Text Button</div>
                              <p className="body1">Used for less important actions.</p>
                         </div>
                         <div className="container">
                             <div className="row">
                                   <Containbtn containedbtn={this.state.smtxtcontainbtn}/>
                                   <Containbtn containedbtn={this.state.mdtextcontainbtn}/>
                                   <Containbtn containedbtn={this.state.lgtextcontainbtn}/>
                             </div>
 
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Labeled Button</div>
                              <p className="body1">Buttons can have labels.</p>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                <Label_button/> 
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Social & Applications Button</div>
                              <p className="body1">Button can link to a social website or application.</p>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <Socialbtn socialbtn={this.state.smsocialbtn}/>
                                 <Socialbtn socialbtn={this.state.mdsocialbtn}/>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Toggle Button</div>
                              <p className="body1">Button can link to a social website or application.</p>
                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                                 <Rdiobtn/>
                             </div>
                         </div>
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">Color</div>
                              <p className="body1">Used for maximum emphasis.</p>
                         </div>
                         
                         <div className="container">
                             <div className="row align-content-end">
                                 <Colorbtnlist colorbtnlist={this.state.colorbtn} />

                             </div>
                         </div>
                     </div>
                 </section>
            </div>
        );
    }
}

export default button;