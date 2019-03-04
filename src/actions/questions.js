import { _saveQuestion, _saveQuestionAnswer} from '../API/_DATA'
//import { showLoading, hideLoading} from 'react-redux-loading'



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

export function addAnswer({authedUser, qid, answers}) {
  return{
    type: ADD_ANSWER,
    authedUser,
    qid,
    answers
  }
}


function receiveAnswers({authedUser,id,  answer}){
  return {
    type: RECEIVE_ANSWERS,
    authedUser,
    id,
    answer
  }
}

export function handleSaveQuestion (question) {

  return (dispatch, getState) => {

    const { authedUser, questions } = getState()
    const {optionOneText, optionTwoText} = question
    // dispatch(addQuestion(question))
    //  dispatch(showLoading())
    return _saveQuestion(
      question,
      authedUser
   ).then((question) => dispatch(addQuestion(question)))
    // .then(() => dispatch(hideLoading()))
  }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer){
  return(dispatch, getState)=> {
    // const { authedUser } = getState();

    return _saveQuestionAnswer({
     authedUser,
     qid,
     answer
    })
    .then((questionAnswer) => dispatch(receiveAnswers(questionAnswer)))
  }
}