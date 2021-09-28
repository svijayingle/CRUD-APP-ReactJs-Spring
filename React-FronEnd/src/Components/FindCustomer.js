import React, { Component } from 'react';
import './Form.css'
import FindCustomerById from '../Services/FindCustomerById';
class FindCustomer extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:'',
            Customer:''
        };
    }
    onIdChange = e => {
        let Id= e.target.value;
        this.setState({
            id: Id
            });
      };
    
    handleSubmit =e=>{
        e.preventDefault();
        let Id= this.state.id;
        if(Id!=""){
            FindCustomerById.findCustomer(this.state.id).then(
                (res)=> {
                    this.setState(
                        {
                            Customer:res.data
                        }
                    )
                }
            )
            console.log(this.state.Customer)
        }
        else{
            alert("please enter id")
        }       
    }
    render() {
        const CustomerPresent = this.state.Customer
        return (
                <center>
                    <div className="welcome-form">
                        <div className="welcome-form-heading"><h2>Find Customer Form</h2></div>
                        <form onSubmit={this.handleSubmit} name="registration-form">
                            <br/>
                            <label>Customer Id :</label>
                            <input type='number' name='id' onChange={this.onIdChange}/>
                            <br/><br/>
                            <input type='submit' name='submit'/>
                        </form>
                    </div>
                    <div>
                        {CustomerPresent?
                        <div>
                            <table border='1' id='customers' >
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Balance</th>
                                    <th>Mobile</th>               
                                </tr>
                                <tr>
                                    <td>{this.state.Customer.id}</td>
                                    <td>{this.state.Customer.name}</td>
                                    <td>{this.state.Customer.email}</td>
                                    <td>{this.state.Customer.balance}</td>
                                    <td>{this.state.Customer.mobile}</td>
                                </tr>
                            </table>
                        </div> 
                        :<div><p>No results</p></div>}
                    </div>
                </center>
        );
    }
}

export default FindCustomer;