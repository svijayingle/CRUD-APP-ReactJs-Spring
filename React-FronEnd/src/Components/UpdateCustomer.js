import React from "react";
import axios from "axios";
import './Form.css'

export default class UpdateCustomer extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
        id:"",
        name: "",
        email: "",
        mobile: "",
        balance :"",
        acc_no:"",
      };
    }
    onIdChange = e => {
      this.setState({
        id: e.target.value
      });
    };
    onNameChange = e => {
        this.setState({
          name: e.target.value
        });
      };
    
      onEmailChange = e => {
        this.setState({
          email: e.target.value
        });
      };
      onMobileChange = e => {
        this.setState({
          mobile: e.target.value
        });
      };
      onBalanceChange = e => {
        this.setState({
          balance: e.target.value
        });
      };
      onACCChange = e => {
        this.setState({
            acc_no: e.target.value
        });
      };
      handleSubmit = e => {
        e.preventDefault();
        const data = {
          id:this.state.id,
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile,
          balance:this.state.balance,
          acc_no:this.state.acc
        };
        axios
          .post("api/update", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
          alert("Customer Updated")
      };
    render() {
      return (
          <center>
                  <div className="welcome-form">
                    <div className="welcome-form-heading"><h2>Update Form</h2></div>
                    <form onSubmit={this.handleSubmit} name="registration-form">
                        <br/>
                        <label>Id :</label>
                        <input type='text' name='id' onChange={this.onIdChange} />
                        <br/>
                        <br/>
                        <label> Name :</label>
                        <input type='text'  name='name' onChange={this.onNameChange}/>
                        <br/>
                        <br/>
                        <label>ACC No. :</label>
                        <input type='text' name='acc' onChange={this.onACCChange} />
                        <br/>
                        <br/>
                        <label>Balanace :</label>
                        <input type='text' name='balance' onChange={this.onBalanceChange}/>
                        <br/>
                        <br/>
                        <label>Email :</label>
                        <input type='text'name='email'onChange={this.onEmailChange}/>
                        <br/>
                        <br/>
                        <label>Mobile :</label>
                        <input type='text' name='mobile' onChange={this.onMobileChange}/>
                        <br/>
                        <br/>
                        <input type='submit' name='submit'/>
                    </form>
                  </div> 
                
        </center>
      );
    }
  }