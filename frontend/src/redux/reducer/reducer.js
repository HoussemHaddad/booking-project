import { GET_CURRENT, LOG_IN, REGISTER } from "../actiontype/actiontype";
import { GET_BASE } from "../actiontype/actiontypepost";
const initialState = {
user:{},
hotels:[]
}

const reducer= (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN :
    case REGISTER :
    localStorage.setItem("token",payload.token)   
    return {...state, user:payload.user}
        
    case GET_CURRENT :
        return {...state,user:payload.user}
        
    
    case GET_BASE :
      return { ...state, hotels:payload.hotels}    
    default:
        return state
  }

 
    
  }
export default reducer
