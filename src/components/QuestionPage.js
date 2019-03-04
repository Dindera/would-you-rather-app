import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MdClose } from 'react-icons/md'
import { formatQuestion } from './shared'
import { Link } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/questions';

class QuestionPage extends Component {


    handleVote = (e) => {
        e.preventDefault()

        const { dispatch, question, authedUser} = this.props

        const answers = question.answers
        const qid = question.id
        // const answer = e.target.value
        console.log('Anss', answers, e.target.value, qid)

        dispatch(handleSaveQuestionAnswer({
            authedUser,
            id: qid,
            
        }))

    }
      

    render() {

        const {  id, question } = this.props

        if(question === null) {
            return <p> This question doesn't exist</p>
        }

        const { 
            name, avatar, optionOne, optionTwo
        } = question

       
        return (
            <div  style={{display: 'flex', justifyContent: 'space-between', maxWidth: '100%'}}>

               <Link to='/'>
               <MdClose className='back-arrow'/>
               </Link>
            <div className='card-question-page'>
            <ul>
             <li key={id}>
           
            <h4 className='h4'>{name} asks:</h4>
            <div className='card-question-body'>
            <div className="card-question-block1">
            <img alt={`Avatar of ${name}`} src={avatar}/>
            </div>
            <div className="card-question-block2 ">
            <form onSubmit={this.handleVote}>
            <h4 className='Or'> Would you rather...</h4>
            <input 
            type='radio'
            name='options'
            value='optionOne'
            id='optionOne'
            />
            
            <label htmlFor='optionOne'>{optionOne.text}</label>        
            <br/>
            {/* <span><i>{optionOne.votes.length}</i></span> */}
            <br/>
            {/* <h4 >OR</h4> */}
            <input 
            type='radio'
            name='options'
            value='optionTwo'
            id='optionTwo'
            />
            <label htmlFor='optionTwo'>{optionTwo.text}</label>
            <br/>
            {/* <span><i>{optionTwo.votes.length}</i></span> */}
            <br/>
            <Link to='/result'>
            <button 
            type='submit'
               className='question-button'               
               >Submit</button>
            </Link>
            </form>
            </div>
           </div>
           </li>
           </ul>
         </div>
         </div>

        )
    }
}


function mapStateToProps({authedUser, questions, users},props){
    const {id} = props.match.params

    const  question  = questions[id]

    console.log('questions', questions, question,)
    return {
        id,  
        question: !questions[id] ? null :
        formatQuestion(question, users[question.author], authedUser),
        questions
        
    }
}

export default connect(mapStateToProps)(QuestionPage)