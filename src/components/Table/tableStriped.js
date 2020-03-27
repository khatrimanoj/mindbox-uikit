import React, { Component } from 'react';

const tableHead = ["Username", "E-mail", "Status", "Revenue", "Comment"];
class tableStriped extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /* checkbox select row code  */
            allChecked: false,
            list: [
                {
                    id: 1,
                    name: "SvenBrand1985",
                    emailId: "svenbrand1985@email.com",
                    status: "Active",
                    Revenue: "$ 1,402.56",
                    comment: "Add comment...",
                    isChecked: false
                },
                {
                    id: 2,
                    name: "AlexDavids45",
                    emailId: "alexdavids45@email.com",
                    status: "Disabled",
                    Revenue: "$ 892.46",
                    comment: "Brief text comment",
                    isChecked: false
                },
                {
                    id: 3,
                    name: "Sandy333",
                    emailId: "sandy333@email.com",
                    status: "Active",
                    Revenue: "$ 873.00",
                    comment: "Add comment...",
                    isChecked: true
                },
                {
                    id: 4,
                    name: "SveDevonHillnBrand1985",
                    emailId: "devonhill@email.com",
                    status: "Active",
                    Revenue: "$ 401.24",
                    comment: "Add comment...",
                    isChecked: false
                },
                {
                    id: 5,
                    name: "EdwardHorton",
                    emailId: "edwardhorton@email.com",
                    status: "Active",
                    Revenue: "$ 302.56",
                    comment: "Add comment...",
                    isChecked: true
                },
                {
                    id: 6,
                    name: "Megan145",
                    emailId: "megan145@email.com",
                    status: "Disabled",
                    Revenue: "$ 200.01",
                    comment: "Add comment...",
                    isChecked: false
                },
                {
                    id: 7,
                    name: "Charles654432",
                    emailId: "charles654432@email.com",
                    status: "Active",
                    Revenue: "$ 104.80",
                    comment: "Add comment...",
                    isChecked: false
                },
                {
                    id: 8,
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
        let arrayCopy = [...this.state.list];
        arrayCopy.sort(this.compareBy(key));
        this.setState({list: arrayCopy});
    }

    // checkbox select row code
    handleChange = e => {
        let itemName = e.target.name;
        let checked = e.target.checked;
        this.setState(prevState => {
            let { list, allChecked } = prevState;
            if (itemName === "checkAll") {
                allChecked = checked;
                list = list.map(item => ({ ...item, isChecked: checked }));
            } else {
                list = list.map(item =>
                    item.name === itemName ? { ...item, isChecked: checked } : item
                );
                allChecked = list.every(item => item.isChecked);
            }
            return { list, allChecked };
        });
    };

    renderList = () => {
        return this.state.list.map(item => (
            <tr key={item} className={item.isChecked ? 'bg-white-smoke' : '' }>
                <td>
                    {/* checkbox select row code  */}
                    <div className="custom-checkbox">
                        <input
                            id={item.id}
                            key={item.id}
                            type="checkbox"
                            name={item.name}
                            value={item.name}
                            checked={item.isChecked}
                            onChange={this.handleChange}
                        />
                        <label for={item.id}></label>
                    </div>
                </td>
                <td>{item.name}</td>
                <td>{item.emailId}</td>
                <td>{item.status}</td>
                <td>{item.Revenue}</td>
                <td>{item.comment}</td>
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
                <table className="table-striped">
                    <thead>
                        <tr>
                            <th style={{ width: "20px" }}>
                               { /* checkbox select row code  */ }
                                <div className="custom-checkbox">
                                    <input type="checkbox"
                                        id="all"
                                        name="checkAll"
                                        checked={this.state.allChecked}
                                        onChange={this.handleChange}/>
                                    <label for="all"></label>      
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
export default tableStriped;
