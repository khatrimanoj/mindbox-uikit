import React, { Component } from 'react';
import Header from '../header/header';
import Tablehead from './texttbl/text_thade';
import Listheading from './heading/Listheading';
import Tablebody from './texttbl/text_tbody'
class Typography extends Component {
    constructor(props)
  {
      super(props)
      this.state = {
         header: [
            {title: 'Typography'}
          ],
          heading: [
            {
                title: 'H1',
                content: 'We develop software',
                class: 'h1'
            },
            {
                title: 'H2',
                content: 'Why shouldn’t a quixotic Kazakh vampire jog barefoot?',
                class: 'h2'
            },
            {
                title: 'H3',
                content: 'Why shouldn’t a quixotic Kazakh vampire jog barefoot?',
                class: 'h3'
            },
            {
                title: 'H4',
                content: 'Why shouldn’t a quixotic Kazakh vampire jog barefoot?',
                class: 'h4'
            },
            {
                title: 'H5',
                content: 'Why shouldn’t a quixotic Kazakh vampire jog barefoot?',
                class: 'h5'
            },
            {
                title: 'H6',
                content: 'Why shouldn’t a quixotic Kazakh vampire jog barefoot?',
                class: 'h6'
            },
            {
                title: 'Subtitle 1',
                content: 'Why shouldn’t a quixotic Kazakh vampire jog barefoot?',
                class: 'subtitle1'
            },
            {
                title: 'Subtitle 2',
                content: 'Why shouldn’t a quixotic Kazakh vampire jog barefoot?',
                class: 'subtitle2'
            },
            {
                title: 'Body 1',
                content: 'The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.',
                class: 'body1'
            },
            {
                title: 'Body 2',
                content: 'The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.',
                class: 'body2'
            },
            {
                title: 'Button 1',
                content: 'SUBMIT',
                class: 'button1'
            },
            {
                title: 'Button 2',
                content: 'SUBMIT',
                class: 'button2'
            },
            {
                title: 'Caption',
                content: 'There was nothing so very remarkable in that',
                class: 'caption'
            },
            {
                title: 'Overline',
                content: 'WHAT WE DO',
                class: 'overline'
            },
        ]
        
      }
     

  }   

   
    render() {
      
        return (
             <div className="wrapper">
                 <section className="container">
                     <div className="row">
                         <Header header={this.state.header[0].title} />
                         <div className="container">
                             <div className="row">
                                 <Listheading heading={this.state.heading} />
                             </div>
                         </div>
                         <hr className="mb-30"></hr>
                         <div className="table-responsive">
                             <table className="table text-center">
                                 <thead>
                                      <Tablehead ></Tablehead>
                                 </thead>
                                 <tbody>
                                     <Tablebody></Tablebody>

                                 </tbody>
                             </table>
                         </div>
                         
                     </div>
                </section>
            </div>
        );
    }
}

export default Typography;