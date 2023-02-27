import axios from 'axios'

const Url='http://localhost:3003/user'

export const ShowUser = async()=>{
    return await axios.get(`${Url}`)
}
export const adduser= async(user)=>{
    return await axios.post(Url,user)
}