import axios from 'axios'
 
class AddCustomer {
    addCustomer = data => {
         return axios.post("api/create", data)
    }
}
 
export default new AddCustomer();