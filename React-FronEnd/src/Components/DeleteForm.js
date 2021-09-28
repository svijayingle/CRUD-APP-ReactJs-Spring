import React, { Component } from 'react';
import './Form.css'
import DeleteCustomer from '../Services/DeleteCustomer';

class DeleteForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:'',
            idError:''
        };
    }
    validate = ()  =>{
        let idError ="";
        if(this.state.id == ''){
            idError = "Id cant be empty"
            this.setState({
                idError:idError
            })
            return false;
        }
        return true;
    }
    onIdChange = e => {
        this.setState({
          id: e.target.value
        });
      };
    
    handleSubmit =e=>{
        e.preventDefault();

        if(this.validate()){
            DeleteCustomer.deleteCustomer(this.state.id).then(
                (res)=> {
                    alert("Customer Deleted")
                }
            ).catch(err=>{this.setState({idError:"Customer Not Found"})})
        }
    }
    render() {
        return (
                <center>
                    <div className="welcome-form">
                        <div className="welcome-form-heading"><h2>Delete Form</h2></div>
                        <form onSubmit={this.handleSubmit} name="registration-form">
                            <br/>
                            <label>Customer Id :</label>
                            <input type='text' name='id' onChange={this.onIdChange}/>
                            <br/>
                            {this.state.idError ? <div style={{color:"red"}}><br/>{this.state.idError}<br/></div> : null}
                            <br/>
                            <input type='submit' name='submit'/>
                        </form>
                    </div>
                </center>
        );
    }
}

export default DeleteForm;