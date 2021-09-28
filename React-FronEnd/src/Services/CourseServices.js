import axios from 'axios'
 
const COURSE_API_BASE_URL = "api/getAll";
 
class CourseServices {
    getAll() {
        return axios.get(COURSE_API_BASE_URL);
    }
}
 
export default new CourseServices();