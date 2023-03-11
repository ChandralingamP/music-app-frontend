import axios from 'axios'

export default ()=>{
    return axios.create({
        baseURL : `https://musicappserver-1-x3219821.deta.app/`
        // baseURL : `http://localhost/5000`
    })
}