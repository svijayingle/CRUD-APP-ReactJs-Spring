import React from "react";
import axios from "axios";
import './Form.css'

export default class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
        name:'',
        email:'',
        mobile:'',
        balance :'',
        acc_no:'',

        showForm:true,
        
        nameError:'',
        emaiError:'',
        mobileError:'',
        balanceError:'',
        acc_noError:''
      };
    }
    validate = ()=>{
      
      if(this.state.name==""){
        this.setState({nameError:"Name cant be empty"})
        return false;
      }
      if(this.state.acc_no==""){
        this.setState({acc_noError:"Acc No cant be empty"})
        return false;
      }
      if(this.state.balance==""){
        this.setState({balanceError:"Balance cant be empty"})
        return false;
      }
      if(!this.state.email.includes('@') || !this.state.email.includes('.')){
        this.setState({emailError:"Email Error"})
        return false;
      }
      if(this.state.mobile==""){
        this.setState({mobileError:"Mobile cant be empty"})
        return false;
      }
      if(this.state.mobile.length!=10){
        this.setState({mobileError:"Mobile no must be length of 10"})
        return false;
      }
      
      return true;
    }
    showAddCustomers = e=> {  
        const { showForm } = this.state;  
        this.setState({  
          showForm: !showForm,  
        });  
    };
    onNameChange = e => {
        this.setState({
          name: e.target.value,
          nameError:''
        });
      };
    
      onEmailChange = e => {
        this.setState({
          email: e.target.value,
          emailError:''
        });
      };
      onMobileChange = e => {
        this.setState({
          mobile: e.target.value,
          mobileError:''
        });
      };
      onBalanceChange = e => {
        this.setState({
          balance: e.target.value,
          balanceError:''
        });
      };
      onACCChange = e => {
        this.setState({
            acc_no: e.target.value,
            acc_noError:''
        });
      };
      handleSubmit = e => {
        e.preventDefault();
        const data = {
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile,
          balance:this.state.balance,
          acc_no:this.state.acc_no
        };
        if(this.validate()){
          axios
            .post("api/create", data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
            alert("Customer Added");
              const showForm = this.state.showForm
            this.setState({
                showForm : !showForm
            })
        }
      };
    render() {
        const { showForm } = this.state;
      return (
          <center>
              <button type="button" className="btn btn-outline-dark" onClick={this.showAddCustomers}> Add Customer </button>{"   "}
              {showForm? <div className="welcome-form">
                    <div className="welcome-form-heading"><h2>Registration Form</h2></div>
                    <form onSubmit={this.handleSubmit} name="registration-form">
                        <br/>
                        <label> Name :</label>
                        <input type='text'  name='name' onChange={this.onNameChange}/>
                        <br/>
                        {this.state.nameError ? <div style={{color:"red"}}><br/>{this.state.nameError}<br/></div> : null}
                        <br/>
                        <label>ACC No. :</label>
                        <input type='text' name='acc' onChange={this.onACCChange} />
                        <br/>
                        {this.state.acc_noError ? <div style={{color:"red"}}><br/>{this.state.acc_noError}<br/></div> : null}
                        <br/>
                        <label>Balanace :</label>
                        <input type='text' name='balance' onChange={this.onBalanceChange}/>
                        <br/>
                        {this.state.balanceError ? <div style={{color:"red"}}><br/>{this.state.balanceError}<br/></div> : null}
                        <br/>
                        <label>Email :</label>
                        <input type='text'name='email'onChange={this.onEmailChange}/>
                        <br/>
                        {this.state.emailError ? <div style={{color:"red"}}><br/>{this.state.emailError}<br/></div> : null}
                        <br/>
                        <label>Mobile :</label>
                        <input type='text' name='mobile' onChange={this.onMobileChange}/>
                        <br/>
                        {this.state.mobileError ? <div style={{color:"red"}}><br/>{this.state.mobileError}<br/></div> : null}
                        <br/>
                        <input type='submit' name='submit'/>
                    </form>
                    </div>:
              <div></div>} 
                
        </center>
      );
    }
  }