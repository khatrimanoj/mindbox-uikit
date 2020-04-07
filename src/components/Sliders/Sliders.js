import React, { Component } from 'react';
import '../Sliders/Slider.css';
import Header from '../header/header';
import NoValueSlider from './Types/noValueSlider'

class ChipsTags extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: [
                { title: 'Sliders' }
            ],
        }
    }   
    render() {
        return (
            <div className="wrapper">
                 <section className="container">
                     <div className="row">
                        <Header header={this.state.header[0].title} />   
                        <div className="col-md-12 mb-30">
                            <div className="h5 mb-20">Continuous Sliders</div>
                            <p className="body1 mb-30">Use this type of slider when the selection doesn't require a specific value.</p>
                            <NoValueSlider />
                        </div>
                     </div>
                </section>
            </div>
        );
    }
}

export default ChipsTags;