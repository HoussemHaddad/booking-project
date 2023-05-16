import axios from "axios";
import {GET_BASE} from "../actiontype/actiontypepost"


export const post = ()=>async(dispatch)=>{
    try {
        const res = await axios.get('http://localhost:5510/api/createhotel')
        dispatch({
            type:GET_BASE,
            payload:res.data
        })
    } catch (error) {
        console.log(error);
    }
}
export const GET = (data)=>async(dispatch)=>{
    try {
       const res = await axios.post('http://localhost:5510/api/gethotel',data)
       dispatch(post ())
   } catch (error) {
       console.log(error)
   }
   }
   export const del = (id)=>async(dispatch)=>{
    try {
      const res = await axios.delete('http://localhost:5510/api/deletehotel/'+id)
      dispatch(post ())
  } catch (error) {
      console.log(error)
  }
  }
  export const update = (data,id)=>async(dispatch)=>{
    try {
      const res = await axios.put('http://localhost:5510/api/updatehotel'+id,data)
      dispatch(post ())
  } catch (error) {
      console.log(error)
  }
  }