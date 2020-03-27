import React, { Component } from 'react';
import CircleRight from "../../images/Checked_Circle_Solid.svg"
import CircleDelete from "../../images/Delete_Circle_Solid.svg"


const tableData = [
    {
        id: 1,
        Name: "XD",
        feature1: CircleRight,
        feature2: CircleRight,
        feature3: CircleRight
    },
    {
        id: 2,
        Name: "Sketch",
        feature1: CircleRight,
        feature2: CircleRight,
        feature3: CircleRight
    },
    {
        id: 3,
        Name: "Figma",
        feature1: CircleDelete,
        feature2: CircleRight,
        feature3: CircleRight
    },
    {
        id: 4,
        Name: "InVision",
        feature1: CircleRight,
        feature2: CircleDelete,
        feature3: CircleRight
    },
    {
        id: 5,
        Name: "Principle",
        feature1: CircleRight,
        feature2: CircleRight,
        feature3: CircleDelete
    }
];

const tableHead = ["Name", "Feature 1", "Feature 2", "Feature 3"];
class tableCompare extends Component {
    constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            tableData,
            tableHead
        };
    }
 
    render() {
        return (
            <>
                <div className="table-responsive bordered-table mb-30">
                    <table className="table-striped compare">
                        <thead>
                            <tr>
                                {tableHead.map(data => (
                                    <th key={data} className="text-gray text-center">{data}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>    
                            {tableData.map((data) => {
                                return <tr key={data}>
                                            <td>{data.Name}</td>
                                            <td className="text-center"><img src={data.feature1} /></td>
                                            <td className="text-center"><img src={data.feature2} /></td>
                                            <td className="text-center"><img src={data.feature3} /></td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="table-responsive bordered-table mb-30">
                    <table className="table-dense compare">
                        <thead>
                            <tr>
                                {tableHead.map(data => (
                                    <th key={data} className="text-gray text-center">{data}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>    
                            {tableData.map((data) => {
                                return <tr key={data}>
                                            <td>{data.Name}</td>
                                            <td className="text-center"><img src={data.feature1} /></td>
                                            <td className="text-center"><img src={data.feature2} /></td>
                                            <td className="text-center"><img src={data.feature3} /></td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default tableCompare;
