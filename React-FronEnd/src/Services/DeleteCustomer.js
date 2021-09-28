import axios from 'axios'
 
class DeleteCustomer {
    deleteCustomer = id => {
         return axios.delete('api/delete/'+id)
    }
}
 
export default new DeleteCustomer();