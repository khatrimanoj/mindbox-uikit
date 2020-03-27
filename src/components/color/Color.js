import React, { Component } from 'react';
import  Header from '../header/header';
// import Baselinecolor from './colorbox/baslinecolorlist';
import Variantcolorlist from './colorbox/variantcolorlis';
import Colorbox from './colorbox/colorbox';
import Addtionalcolorlist from './additionalcolor/addtionalcolorlist';
import Shadows from './shadows/shadowlist'
 
class Color extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
        header: [
          {title: 'Colors'}
        ],
        baselinecolor: [
            {
                title: 'Primary',
                colorcode: 'HEX #0077CC',
                class: 'bg-primary',
                position: 'true'
            },
            {
                title: 'Secondary',
                colorcode: 'HEX #0077CC',
                class: 'bg-secondary',
                position: 'true'
            },
            {
                title: 'Dark BG',
                colorcode: 'HEX #0077CC',
                class: 'bg-dark-bg',
                position: 'true'
            },
            {
                title: 'Black',
                colorcode: 'HEX #0077CC',
                class: 'bg-black',
                position: ''
            },
             {
                title: 'Gray',
                colorcode: 'HEX #0077CC',
                class: 'bg-gray',
                position: ''
            },
            {
                title: 'Light Gray',
                colorcode: 'HEX #0077CC',
                class: 'bg-light-gray',
                position: ''
            },
        ],
        variantcolor: [
            {
                title: 'Primary Variant',
                colorcode: 'HEX #0077CC',
                class: 'bg-primary-variant'
            },
            {
                title: 'Secondary Variant',
                colorcode: 'HEX #0077CC',
                class: 'bg-secondary-variant'
            },
            {
                title: 'Dark BG Variant',
                colorcode: 'HEX #0077CC',
                class: 'bg-dark-bg-variant'
            },
        ],
        addtionalcolor: [
            {
                title: 'Red',
                colorcode: 'HEX #0077CC',
                class: 'bg-red'
            },
            {
                title: 'Orange',
                colorcode: 'HEX #0077CC',
                class: 'bg-orange'
            },
            {
                title: 'Yellow',
                colorcode: 'HEX #0077CC',
                class: 'bg-yellow'
            },
            {
                title: 'La Rioja',
                colorcode: 'HEX #0077CC',
                class: 'bg-la-rioja'
            },
            {
                title: 'Forest Green',
                colorcode: 'HEX #0077CC',
                class: 'bg-green'
            },
            {
                title: 'pelorous',
                colorcode: 'HEX #0077CC',
                class: 'bg-pelorous'
            },
            {
                title: 'Disy Bush',
                colorcode: 'HEX #0077CC',
                class: 'bg-disy-bush'
            },
            {
                title: 'Violet',
                colorcode: 'HEX #0077CC',
                class: 'bg-violet'
            },
            {
                title: 'Mulberry',
                colorcode: 'HEX #0077CC',
                class: 'bg-mulberry'
            },
            {
                title: 'korma',
                colorcode: 'HEX #0077CC',
                class: 'bg-korma'
            },
            {
                title: 'Buttercup',
                colorcode: 'HEX #0077CC',
                class: 'bg-buttercup'
            },
            {
                title: 'White Smoke',
                colorcode: 'HEX #0077CC',
                class: 'bg-white-smoke'
            },
            
            
        ],
        shadow: [
            {
                title: 'Z1',
                class: 'z1'
            },
            {
                title: 'Z2',
                class: 'z2'
            },
            {
                title: 'Z3',
                class: 'z3'
            },
            {
                title: 'Z4',
                class: 'z4'
            },
        ],

     }
    }
    render() {
      
        // var result = this.state.baselinecolor.filter(t=>t.position === 'true');
        return (
             <div className="wrapper">
                 <section className="container">
                     <div className="row">
                     <Header header={this.state.header[0].title} />
                         <div className="col-md-12 mb-30">
                             <div className="h5 mb-20">The baseline color theme</div>
                              <p className="body1">All colors are added to the Assets Panel. You can easily change them to create a color theme that reflects your brand or style.</p>

                         </div>
                         <div className="container">
                             <div className="row align-content-end">
                            
                             
                                 <Colorbox 
                                 title={this.state.baselinecolor[0].title}
                                 colorcode={this.state.baselinecolor[0].colorcode}
                                 class={this.state.baselinecolor[0].class}/>
                                  <Colorbox 
                                 title={this.state.baselinecolor[1].title}
                                 colorcode={this.state.baselinecolor[1].colorcode}
                                 class={this.state.baselinecolor[1].class}/>
                                  <Colorbox 
                                 title={this.state.baselinecolor[2].title}
                                 colorcode={this.state.baselinecolor[2].colorcode}
                                 class={this.state.baselinecolor[2].class}/>
                                  {/* <Baselinecolor baselinecolor={this.state.baselinecolor} /> */}
                                  <Variantcolorlist variantcolor={this.state.variantcolor}/>
                                  <Colorbox 
                                 title={this.state.baselinecolor[3].title}
                                 colorcode={this.state.baselinecolor[3].colorcode}
                                 class={this.state.baselinecolor[3].class}/>
                                  <Colorbox 
                                 title={this.state.baselinecolor[4].title}
                                 colorcode={this.state.baselinecolor[4].colorcode}
                                 class={this.state.baselinecolor[4].class}/>
                                  <Colorbox 
                                 title={this.state.baselinecolor[5].title}
                                 colorcode={this.state.baselinecolor[5].colorcode}
                                 class={this.state.baselinecolor[5].class}/>

                             </div>
                         </div>
                         <div className="col-md-12 mt-30">
                             <div className="h5 mb-20">Additional colors</div>

                         </div>
                        <div className="container">
                            <div className="row">
                                <Addtionalcolorlist  addtionalcolor={this.state.addtionalcolor}/>
 
                            </div>

                        </div>
                        <div className="col-md-12">
                             <div className="h5 mb-20">Shadows</div>

                         </div>
                         <div className="container">
                             <div className="row">
                                 <Shadows shadow={this.state.shadow} />

                             </div>
                         </div>
                     </div>
                 </section>
             </div>
        );
    }
}

export default Color;