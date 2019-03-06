import React, { Component } from 'react'
import { connect } from 'react-redux'
import Questions from './Questions';
import {userID } from './shared'



class HomePage extends Component{
  state = {
   isAnswered : false, 
  
  }

  handleChange = (e) => {
    if(e.target.value === 'unanswered'){
   
        this.setState(()=> ({
          isAnswered: false,
        
        }))
    }else if(e.target.value === 'answered'){

      this.setState(() => ({
        isAnswered: true
      }))
    }


  }

  render() {
    const { isAnswered } = this.state

    const { questionIds, userId} = this.props
      return(
        <div className='card-home'>
          <div className='card-home-head'>
          <div className='card-home-div2'>
                  <button
                      className='question-button-home'
                      value='unanswered'
                      onClick={this.handleChange}
                      >
                      Unanswered Questions
                </button>
              </div>
              <div className='card-home-div1'>
                  <button
                    type='button'
                    value='answered'
                    className='question-button-home'
                    onClick={this.handleChange}>
                      Answered Questions
                </button>
              </div>
           
          </div>
          <div>
          {isAnswered === true ? userId.map((i) => <Questions key={i} id={i}/>)  :  questionIds.map((i) => <Questions key={i} id={i}/>) }</div>
         </div>
      )
  }
}





function mapStateToProps({questions, users,  authedUser}, {id}){
  

  const questionId  = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  const userId = userID(authedUser, users)
  const concatArr = questionId.concat(userId)
   
  const answer = concatArr.filter((val, i) => concatArr.indexOf(val) !== i)
  const unanswer = concatArr.filter((val, i) => {
    if(concatArr.indexOf(val) === i){
      return concatArr.lastIndexOf(val) === i
    }
  })

  const unanswered = unanswer.map(unans => unans).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  const answered = answer.map(ans => ans).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
 
  
  
  return {
    authedUser,
    userId: answered,
    questionIds : unanswered,
    questions,
    id
 
  }

}

export default connect(mapStateToProps)(HomePage)