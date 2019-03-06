import { RECIEVE_USERS, ADD_ANSWER_USERS, ADD_QUESTION_USERS } from '../actions/users'

export default function users(state = {}, action) {
    switch(action.type){
        case RECIEVE_USERS : 
        return {
            ...state,
            ...action.users
        }

        case ADD_ANSWER_USERS : 
        return {
            ...state,
            [action.authedUser]: {
                ...state[action.authedUser],
                answers: {
                   ...state[action.authedUser].answers,
                   [action.qid]: action.answer
                }
            }

        }

        case ADD_QUESTION_USERS : 
        const authedUser = action.question.author
        // const { questions } = this.props
        return {
            ...state,
            [authedUser]: {
                ...state[authedUser],
                questions: state[authedUser].questions.concat([action.question.id])
            }

        }
        default: 
        return state
    }
}