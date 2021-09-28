import './App.css';
import React from 'react';
import Customers from './Components/Customers';
import Welcome from './Components/Welcome';
import CustomerImage from './Components/customerImage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import FindCustomer from './Components/FindCustomer';
import RegisterForm from './Components/RegisterForm';
import DeleteForm from './Components/DeleteForm';
import UpdateCustomer from './Components/UpdateCustomer';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
function App() {
    
    return (
      <Router>
        <div className="App">
            <Header></Header>
            <Welcome></Welcome>
            <Switch>
              <Route path="/home" component={CustomerImage}></Route>
              <Route path="/ViewAllCustomers" component={Customers}></Route>
              <Route path="/findCustomer" component={FindCustomer}></Route> 
              <Route path="/addCustomer" component={RegisterForm}></Route> 
              <Route path="/deleteCustomer" component={DeleteForm}></Route>  
              <Route path="/updateCustomer" component={UpdateCustomer}></Route> 
            </Switch>
            <Footer></Footer>
        </div>
      </Router>
    )
}
export default App;
