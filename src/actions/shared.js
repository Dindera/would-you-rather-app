import { _getQuestions, _getUsers, _saveQuestion } from '../API/_DATA'
import {receiveUsers} from './users.js'
import {receiveQuestions} from './questions.js'
import {userLogin} from './login.js'
import { showLoading, hideLoading} from 'react-redux-loading'

const USER_LOGIN = null

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ])
    .then(([users, questions]) => ({
      users, questions
    }))
    .then(({users, questions}) => {
       dispatch(receiveUsers(users))
       dispatch(receiveQuestions(questions))
       dispatch(userLogin(USER_LOGIN))
       dispatch(hideLoading())     
    })
  }
}

export function saveQuestion(info) {
  return _saveQuestion(info)
}
