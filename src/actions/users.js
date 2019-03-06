
export const RECIEVE_USERS = 'RECIEVE_USERS'
export const ADD_ANSWER_USERS = 'ADD_ANSWER_USERS'
export const ADD_QUESTION_USERS = 'ADD_QUESTION_USERS'


export function receiveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users,
  }
}

export function addAnswerUsers({authedUser, qid, answer}) {
  return{
    type: ADD_ANSWER_USERS,
    authedUser,
    qid,
    answer
  }
}

export function addQuestionUsers(question){
  return{
    type: ADD_QUESTION_USERS,
    question
  }
}