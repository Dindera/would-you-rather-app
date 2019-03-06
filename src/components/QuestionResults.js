import React, {Component} from 'react'
import { connect } from 'react-redux'
//import { Link } from 'react-router-dom'
import { formatQuestion } from './shared'



class QuestionResult extends Component {


    render() {
        const { question} = this.props

        const { 
            optionOne, optionTwo,
        } = question

        // console.log('questionss', question, questions)
        return (
            <div>
             <form className='form-new-question'>
            <h4 className='Or'> Would you rather...</h4>        
            <p>{optionOne.text}</p>        
            <br/>
            <span><i>{optionOne.votes.length}</i></span>
            <br/>
            {/* <h4 >OR</h4> */}

            <p>{optionTwo.text}</p>
            <br/>
            <span><i>{optionTwo.votes.length}</i></span>
            <br/>
            </form></div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props){
    const {id} = props.match.params

    const  question  = questions[id]

    // console.log('questions', questions, question,)
    return {
        id,  
        question: !questions[id] ? null :
        formatQuestion(question, users[question.author], authedUser),
        questions
        
    }
}


export default connect(mapStateToProps)(QuestionResult)