import React, { Component } from 'react';

const tableHead = ["Username", "E-mail", "Status", "Revenue", "Comment"];
class tableDense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allChecked: false,
            list1: [
                {
                    id: "one",
                    name: "SvenBrand1985",
                    emailId: "svenbrand1985@email.com",
                    status: "Active",
                    Revenue: "$ 1,402.56",
                    comment: "Add comment...",
                    isChecked: false
                },
                {
                    id: "two",
                    name: "AlexDavids45",
                    emailId: "alexdavids45@email.com",
                    status: "Disabled",
                    Revenue: "$ 892.46",
                    comment: "Brief text comment",
                    isChecked: false
                },
                {
                    id: "three",
                    name: "Sandy333",
                    emailId: "sandy333@email.com",
                    status: "Active",
                    Revenue: "$ 873.00",
                    comment: "Add comment...",
                    isChecked: true
                },
                {
                    id: "four",
                    name: "SveDevonHillnBrand1985",
                    emailId: "devonhill@email.com",
                    status: "Active",
                    Revenue: "$ 401.24",
                    comment: "Add comment...",
                    isChecked: false
                },
                {
                    id: "five",
                    name: "EdwardHorton",
                    emailId: "edwardhorton@email.com",
                    status: "Active",
                    Revenue: "$ 302.56",
                    comment: "Add comment...",
                    isChecked: true
                },
                {
                    id: "six",
                    name: "Megan145",
                    emailId: "megan145@email.com",
                    status: "Disabled",
                    Revenue: "$ 200.01",
                    comment: "Add comment...",
                    isChecked: false
                },
                {
                    id: "seven",
                    name: "Charles654432",
                    emailId: "charles654432@email.com",
                    status: "Active",
                    Revenue: "$ 104.80",
                    comment: "Add comment...",
                    isChecked: false
                },
                {
                    id: "eight",
                    name: "AnnSmith",
                    emailId: "annsmith@email.com",
                    status: "Active",
                    Revenue: "$ 98.15",
                    comment: "Add comment...",
                    isChecked: false
                },
            ]
        };
        // sorting code
        this.compareBy.bind(this);
        this.sortBy.bind(this);
    }

    // sorting code
    compareBy(key) {
        return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
        };
    }
    // sorting code
    sortBy(key) {
        let arrayCopy = [...this.state.list1];
        arrayCopy.sort(this.compareBy(key));
        this.setState({list1: arrayCopy});
    }

    handleChange = e => {
        let itemName = e.target.name;
        let checked = e.target.checked;
        this.setState(prevState => {
            let { list1, allChecked } = prevState;
            if (itemName === "checkAll") {
                allChecked = checked;
                list1 = list1.map(item1 => ({ ...item1, isChecked: checked }));
            } else {
                list1 = list1.map(item1 =>
                    item1.name === itemName ? { ...item1, isChecked: checked } : item1
                );
                allChecked = list1.every(item1 => item1.isChecked);
            }
            return { list1, allChecked };
        });
    };

    renderList = () => {
        return this.state.list1.map(item1 => (
            <tr key={item1} className={item1.isChecked ? 'bg-white-smoke' : '' }>
                <td>
                    {/* checkbox select row code  */}
                    <div className="custom-checkbox small">
                        <input
                            id={item1.id}
                            key={item1.id}
                            type="checkbox"
                            name={item1.name}
                            value={item1.name}
                            checked={item1.isChecked}
                            onChange={this.handleChange}
                        />
                        <label for={item1.id}></label>
                    </div>
                </td>
                <td>{item1.name}</td>
                <td>{item1.emailId}</td>
                <td>{item1.status}</td>
                <td>{item1.Revenue}</td>
                <td>{item1.comment}</td>
            </tr>
        ));
    };
    render() {
        return (
            <div className="table-responsive bordered-table mb-60">
                <div className="table-header">
                    <div className="h6">Table Header</div>
                    <div className="button">
                        <div className="sort-icon">
                    
                        </div>
                        <div className="dots-icon">
                    </div>
                    </div>
                </div>
                <table className="table-dense">
                    <thead>
                        <tr>
                            <th style={{ width: "20px" }}>
                                { /* checkbox select row code  */ }
                                <div className="custom-checkbox small">
                                    <input type="checkbox"
                                        id="all1"
                                        name="checkAll"
                                        checked={this.state.allChecked}
                                        onChange={this.handleChange}/>
                                    <label for="all1"></label>      
                                </div>
                            </th>
                            {tableHead.map(data => (
                                /* sorting code  */
                                <th className="text-gray text-left" onClick={() => this.sortBy(data)}>{data}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        );
    }

}
export default tableDense;
