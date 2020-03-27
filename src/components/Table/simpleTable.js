import React, { Component } from 'react';

const tableData = [
    {
        id: 1,
        userName: "SvenBrand1985",
        emailId: "svenbrand1985@email.com",
        status: "Active",
    },
    {
        id: 2,
        userName: "AlexDavids45",
        emailId: "alexdavids45@email.com",
        status: "Disabled",
    },
    {
        id: 3,
        userName: "Sandy333",
        emailId: "sandy333@email.com",
        status: "Active",
    },
    {
        id: 4,
        userName: "SveDevonHillnBrand1985",
        emailId: "devonhill@email.com",
        status: "Active",
    },
    {
        id: 5,
        userName: "EdwardHorton",
        emailId: "edwardhorton@email.com",
        status: "Active",
    }
];

const tableHead = ["Username", "E-mail", "Status"];
const selectAll = true;
const checkBoxObj = tableData.reduce((acc, d) => (acc["chbx" + d.name] = selectAll, acc), {});
class tableSimple extends Component {
    constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            tableData,
            selectAll,
            checkBoxObj,
            tableHead
        };
      this.toggleAllChange = this.toggleAllChange.bind(this);
      this.toggleOneChange = this.toggleOneChange.bind(this);
    }
    toggleAllChange(event) {
        const selectAll = event.target.checked;
        
        const newCheckBoxObj = {};
        for(let k in this.state.checkBoxObj) {
            newCheckBoxObj[k] = selectAll;
        }

        this.setState({
            checkBoxObj: newCheckBoxObj,
            selectAll
        });
    }

    toggleOneChange(event) {
        const target = event.target;
        const value = target.checked;
        const name = target.name;
        
        const newCheckBoxObj = { ...this.state.checkBoxObj, [name]: value };
        
        const selectAll = Object.values(newCheckBoxObj).every(chk => chk);
        
    
        this.setState({
            checkBoxObj: newCheckBoxObj,
            selectAll
        });
    }
    render() {
         const filteredDatas = this.state.tableData;
        return (
            <>
                <div className="table-responsive bordered-table mb-30">
                    <table className="table-striped">
                        <thead>
                            <tr>
                                {tableHead.map(data => (
                                    <th key={data} className="text-gray text-left">{data}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>    
                            {filteredDatas.map((data) => {
                                return <tr key={data.id}>
                                            <td>{data.userName}</td>
                                            <td>{data.emailId}</td>
                                            <td>{data.status}</td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="table-responsive bordered-table mb-30">
                    <table className="table-dense">
                        <thead>
                            <tr>
                                {tableHead.map(data => (
                                    <th key={data} className="text-gray text-left">{data}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>    
                            {filteredDatas.map((data) => {
                                return <tr key={data.id}>
                                            <td>{data.userName}</td>
                                            <td>{data.emailId}</td>
                                            <td>{data.status}</td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default tableSimple;
