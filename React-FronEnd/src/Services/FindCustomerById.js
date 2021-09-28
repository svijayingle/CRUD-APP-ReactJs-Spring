import axios from 'axios'
 
class FindCustomerById {
    findCustomer = id => {
         return axios.get('api/find/'+id)
    }
}
 
export default new FindCustomerById();