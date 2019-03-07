import React, {Component} from 'react'
import { connect } from 'react-redux'
import {TiStarburst } from 'react-icons/ti/'
import { formatQuestion } from './shared'
import { Redirect } from 'react-router-dom'



class QuestionResult extends Component {


    render() {
        const { question, id, user, authedUser} = this.props
        
        if(question === null) {
            return <p> This question doesn't exist</p>
        }
        const { 
            name, avatar, optionOne, optionTwo,
        } = question

    
         
        const percent1 = Math.floor(optionOne.votes.length/user.length * 100)
        const percent2 = Math.floor(optionTwo.votes.length/user.length * 100) 
        const votesNum = optionOne.votes.length + optionTwo.votes.length

        return (
            <div>
             <ul>
             <li key={id}>
             {optionOne.votes.includes(authedUser) === false && optionTwo.votes.includes(authedUser)=== false 
             
             
             ? (<p><Redirect to={`/questions/${id}`}/></p>) 
             
             : 
            ( <div>
            <div className='div-name-date'>
            <h4 className='h4'>Asked by {name}</h4>
            </div>
            <div className='card-result-body'>
            <div className="card-result-block1">
            <img alt={`Avatar of ${name}`} src={avatar}/>
            </div>
            <div className="card-result-block2 ">
            <h4>Result:</h4>
            <div
             className="card-result-block"
            style={optionOne.votes.includes(authedUser)? {backgroundColor: 'rgb(205, 180, 223)', border: '1px solid rebeccapurple'}: {backgroundColor: 'none'}}
            >
            <div className="card-result">
            <h5> Would you rather {optionOne.text}</h5>
            {optionOne.votes.includes(authedUser)? (<TiStarburst color='yellow' className='vote-icon'/>): (<p></p>)}
            </div>
            <span><i>{percent1}%</i></span>
            <p>{optionOne.votes.length} out of {votesNum} votes</p>
            </div>
            <div
            className="card-result-block"
            style={optionTwo.votes.includes(authedUser)? {backgroundColor: 'rgb(205, 180, 223)', border: '1px solid rebeccapurple'}: {backgroundColor: 'none'}}
            >
            <div className="card-result">
            <h5> Would you rather {optionTwo.text}</h5>
            {optionTwo.votes.includes(authedUser)? (<TiStarburst color='yellow' className='vote-icon'/>): (<p></p>)}
            </div>
            <span><i>{percent2}%</i></span>
            <p>{optionTwo.votes.length} out of {votesNum} votes</p>
            </div>
            </div>
           </div></div>)
            
            }
            </li>
            </ul>
           </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props){
    const {id} = props.match.params
    const user = Object.keys(users)
    const  question  = questions[id]

    
    return {
        authedUser,
        id,  
        question: !questions[id] ? null :
        formatQuestion(question, users[question.author], authedUser),
        questions,
        user
        
    }
}


export default connect(mapStateToProps)(QuestionResult)