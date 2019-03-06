import { _saveQuestion, _saveQuestionAnswer} from '../API/_DATA'
import { showLoading, hideLoading} from 'react-redux-loading'
import { addAnswerUsers, addQuestionUsers } from './users'



export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'
export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS'


export function receiveQuestions(questions){
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addQuestion(question){
  return {
    type: ADD_QUESTION,
    question,

  }
}

 function addAnswer({authedUser, qid, answer}) {
  return{
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveQuestion (optionOneText, optionTwoText) {

  return (dispatch, getState) => {

    const { authedUser } = getState()

    const author = authedUser
    dispatch(showLoading());

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then((question) => {
      dispatch(addQuestion(question))
      dispatch(addQuestionUsers(question))
    }).then(() =>  dispatch(hideLoading()))
   

  }
}

export function handleSaveQuestionAnswer(qid, answer){

  return(dispatch, getState) => {
    const { authedUser} = getState()

    dispatch(showLoading());
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
    .then(() => dispatch(addAnswer({authedUser,qid,answer})))
    .then(() =>   dispatch(addAnswerUsers({authedUser,qid,answer})))
    .then(() => dispatch(hideLoading()))
  }
}