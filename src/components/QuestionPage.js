import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from './shared'
import { handleSaveQuestionAnswer } from '../actions/questions';
import { Redirect } from 'react-router-dom'

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

        const { dispatch, question, history} = this.props

        const qid = question.id

        dispatch(handleSaveQuestionAnswer(qid, this.state.checkedOption))
        .then(() => history.push(`/results/${qid}`))
    
    }
      

    render() {
        const { checkedOption } = this.state
        const {  id, question, authedUser } = this.props
         

        if(question === null) {
            return <p> This question doesn't exist</p>
        }

        const { 
            name, avatar, optionOne, optionTwo,
        } = question

       
        return (
            <div  style={{display: 'flex', justifyContent: 'space-between', maxWidth: '100%'}}>

            <div className='card-question-page'>
            <ul>
             <li key={id}>
             {optionOne.votes.includes(authedUser) === true || optionTwo.votes.includes(authedUser) === true 
              
              ? (<p><Redirect to={`/results/${id}`}/></p>) 
              
              : (<div>
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
                <br/>
                <button 
                 type='submit'
                 className='question-button'
                 disabled={checkedOption !== 'optionOne' && checkedOption !== 'optionTwo'}               
                 >Submit</button>
                </form>
                </div>
               </div>
               </div>
              )
            }

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
        user,
        authedUser
        
    }
}

export default connect(mapStateToProps)(QuestionPage)