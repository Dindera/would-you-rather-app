import { combineReducers } from 'redux'
import authedUser from './login'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
    questions,
    users,
    authedUser,
    loadingBar: loadingBarReducer,
})
