import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MdClose } from 'react-icons/md'
import { formatQuestion } from './shared'
import { Link } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/questions';

class QuestionPage extends Component {

state = {
    checkedOption : '',
}

handleChange = (e) => {
const val = e.target.value
 
    this.setState(() => ({
        checkedOption: val
    }))
}


    handleVote = (e) => {
        e.preventDefault()

        const { dispatch, question} = this.props

        const qid = question.id

        dispatch(handleSaveQuestionAnswer(qid, this.state.checkedOption))
    
    
    }
      

    render() {
        const { checkedOption } = this.state
        const {  id, question } = this.props
         

        if(question === null) {
            return <p> This question doesn't exist</p>
        }

        const { 
            name, avatar, optionOne, optionTwo,
        } = question

       
        return (
            <div  style={{display: 'flex', justifyContent: 'space-between', maxWidth: '100%'}}>

               <Link to={`/result/${id}`}>
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
            onChange={this.handleChange}
            value='optionOne'
            checked={checkedOption === 'optionOne'}
            />
            <label htmlFor='optionOne'>{optionOne.text}</label>        
            <br/>
            <span><i>{optionOne.votes.length}</i></span>
            <br/>
            <input 
            type='radio'
            name='options'
            onChange={this.handleChange}
            value='optionTwo'
            checked={checkedOption === 'optionTwo'}
            />
            <label htmlFor='optionTwo'>{optionTwo.text}</label>
            <br/>
            <span><i>{optionTwo.votes.length}</i></span>
            <br/>
      
            <button 
             type='submit'
             className='question-button'               
             >Submit</button>

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

    const user = Object.keys(users)

    const  question  = questions[id]

 
    return {
        id,  
        question: !questions[id] ? null :
        formatQuestion(question, users[question.author], authedUser),
        questions,
        user
        
    }
}

export default connect(mapStateToProps)(QuestionPage)