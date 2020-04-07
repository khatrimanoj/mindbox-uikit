import React, { Component } from 'react';
import '../ChipsTags/Chips.css';
import Header from '../header/header';
import InputChips from './Types/inputChips';
import TextFieldChips from './Types/textfieldChips';
import TextFieldDraggableChips from './Types/draggableChips';
import SelectionChips from './Types/selectionChips';
import NoLableChips from './Types/nolableChips';
import FilterChips from './Types/filterChips';
import ImgFilterChips from './Types/imgFilterChips';
import NoLabelFilter from './Types/nolabelFilter';
import Tags from './Types/Tags';

const selectedTags = tags => {
    console.log(tags);
};
class ChipsTags extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: [
                { title: 'Chips & Tags' }
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
                            <div className="h5 mb-20">Input Chips</div>
                            <p className="body1 mb-30">Input chips are used to verify input information by converting it into a compact form.</p>
                            <InputChips />

                            <p className="body1 mb-30">Chips within text field.</p>
                            <TextFieldChips selectedTags={selectedTags} tags={['Benjamin Parker', 'Michael Joseph']} />
                            
                            <p className="body1 mb-30">Chips can be draggable.</p>
                            <TextFieldDraggableChips selectedTags={selectedTags} tags={['Benjamin Parker1', 'Michael Joseph1']} />
                            
                            <div className="h5 mb-20">Selection Chips</div>
                            <p className="body1 mb-30">Selection chips may be used as an alternative to toggle buttons or radio buttons. You can select only a single chip from several options.</p>
                            <SelectionChips />

                            <p className="body1 mb-30">Selection chips without text labels.</p>
                            <NoLableChips />

                            <div className="h5 mb-20">Filter Chips</div>
                            <p className="body1 mb-30">Use filter chips to select or unselect multiple options.</p>
                            <FilterChips />

                            <p className="body1 mb-30">Filter chips can contain images.</p>
                            <ImgFilterChips />

                            <p className="body1 mb-30">Filter chips without text labels.</p>
                            <NoLabelFilter />

                            <div className="h5 mb-20">Tags</div>
                            <p className="body1 mb-30">Tags provide additional information or help to find related content.</p>
                            <Tags />
                        </div>
                     </div>
                </section>
            </div>
        );
    }
}

export default ChipsTags;