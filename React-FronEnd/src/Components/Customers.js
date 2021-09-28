import React, {Component} from 'react';
import './Customertable.css';
import CourseServices from '../Services/CourseServices';
const axios = require('axios');

export default class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Customers: []
        };
    }
    getUsersData() {
        axios
            .get(`/api/getAll`, {})
            .then(res => {
                const data = res.data
                this.setState(
                    {
                        Customers:data
                    }
                )
            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount() {
        CourseServices.getAll().then((res) => {
            this.setState({ Customers: res.data });
        }
        );
    }
    render() {

        const customers = this.state.Customers.length;
        return (
            <div>
                <br></br>
                <div >
                    <div>
                        {customers?
                        <div>
                            <div>Bank Customers</div>
                            <table border='1' id='customers' >
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th>Mobile</th>
                                
                                </tr>
                                { this.state.Customers.map(users => 
                                    <tr>
                                        <td>{users.id}</td>
                                        <td>{users.name}</td>
                                        <td>{users.email}</td>
                                        <td>{users.balance}</td>
                                        <td>{users.mobile}</td>
                                    </tr>
                                )}
                            </table>
                        </div>
                        :<div>No Customers or check Database is working or not</div>}
                    </div>    
                </div>
                <br></br>
                <br></br>
            </div>
        )
    }
}

