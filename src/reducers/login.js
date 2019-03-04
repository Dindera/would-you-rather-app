import { LOG_IN } from '../actions/login'

export default function authedUser (state = null, action) {
   switch(action.type) {
       case LOG_IN :
       return action.id
       default: 
       return state
   }

}