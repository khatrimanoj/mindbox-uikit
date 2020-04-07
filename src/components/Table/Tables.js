import React, { Component } from 'react';
import '../Table/Table.css'
import Header from '../header/header';
import TableStriped from '../Table/tableStriped';
import TableDense from '../Table/tableDense';
import SimpleTable from '../Table/simpleTable';
import CompareTable from '../Table/tableCompare'

class Tables extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: [
                { title: 'Tables' }
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
                            <p className="body1 mb-30">Tables include three or more columns and are used to display different sets of information.</p>
                            <TableStriped />
                            <p className="body1 mb-30">Dense table.</p>
                            <TableDense />
                            <div className="full-width">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="body1 mb-30">Simple three column table.</p>
                                        <SimpleTable />
                                    </div>
                                    <div className="col-md-6">
                                        <p className="body1 mb-30">Compare table.</p>
                                        <CompareTable />
                                    </div>
                                </div>
                            </div>
                         </div>
                     </div>
                </section>
            </div>
        );
    }
}

export default Tables;
