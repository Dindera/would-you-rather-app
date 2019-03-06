import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestion, formatDate } from './shared'



class Questions extends Component {

    render() {

        const { question } = this.props

        if(question === null ) {
            return <p> This question doesn't exist</p>
        }
         
        const { 
            name, avatar,id, optionOne, timestamp,
        } = question


        return (
            <div className='card-question'>
               <ul>
                <li key={id}>
              <div className='div-name-date'>
               <h4 className='h4'>{name} asks:</h4>
               <i>{formatDate(timestamp)}</i>
               </div>
               <div className='card-question-body'>
               <div className="card-question-block1">
               <img alt={`Avatar of ${name}`} src={avatar}/>
               </div>
               <div className="card-question-block2 ">
               <h4> Would you rather</h4>
               <p>...{optionOne.text}...</p>
               <Link to={`/question/${id}`}>
               <button 
               className='question-button'               
               >View Poll</button>
               </Link>
               </div>
              </div>
              </li>
              </ul>
            </div>
        )
    }
}


function mapStateToProps({authedUser, users, questions},{id}){

    const question = questions[id]
    const user= users[id]
    
    return {
        authedUser,
        user,
        question: question ? 
        formatQuestion(question, users[question.author], authedUser)
        : null
    }
}

export default connect(mapStateToProps)(Questions)