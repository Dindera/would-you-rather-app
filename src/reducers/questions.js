import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
        return {
            ...state,
            ...action.questions
        }
        case ADD_QUESTION :
        
        const { question } = action

        let questions = {}

        // let optionOne, optionTwo = {}
        //    if(question.optionOne !== null || question.optionTwo !== null){
        //        optionOne = {
        //            [question.optionOne] : {
        //                ...state[question.optionOne],
        //                votes: state[question.optionOne].votes.concat(question.id)
        //            }
        //        }
        //    }
         
        return {
            ...state,
            [action.question.id]: action.question,
            // questions: [action.authedUser].questions.concat([action.question.id])
        }
        case ADD_ANSWER :
        //   const { users, questions } = action

           return{
               ...state,
       
                [action.authedUser]: {
                   ...state[action.authedUser],
                   answers: {
                       ...state[action.authedUser].answers,
                       [action.qid]: action.answer
                   }
                },   
        //         ...questions,    

               [action.qid]: {

                   ...state[action.qid],
                 [action.answers]: {
                   ...state[action.qid][action.answers],
                   votes: state[action.qid][action.answers].votes.concat([action.authedUser])
                 } 
               }
           }


        default :
        return state
    }
}