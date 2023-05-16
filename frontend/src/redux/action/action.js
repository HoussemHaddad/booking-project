import axios from 'axios'
import { GET_CURRENT, LOG_IN, REGISTER } from "../actiontype/actiontype"


export const login =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('http://localhost:5510/api/login',data)
        dispatch({
            type:LOG_IN,
            payload:res.data
        })
        navigate("/home")
    } catch (error) {
        console.log(error)
    }
}

export const register =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('http://localhost:5510/api/register',data)
        dispatch({
            type:REGISTER,
            payload:res.data
        })
        navigate('/home')
    } catch (error) {
        console.log(error)
    }
}

export const getCurrent= ()=>async(dispatch)=>{
   const config = {
    headers: {
        token: localStorage.getItem("token"),
      },
   }
    try {
        const res = await axios.get("http://localhost:5510/api/get",config)
        dispatch({
            type:GET_CURRENT,
            payload:res.data
        })
    } catch (error) {
        console.log(error)
    }
}


