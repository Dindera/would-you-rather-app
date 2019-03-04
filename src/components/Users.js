import React, { Component } from 'react'
import { connect } from 'react-redux';

class Users extends Component {

    render () {

        const { user} = this.props
       

        
        const {name, answers, questions, avatarURL } = user
        
    //    const scoreArray = [] 

    const score = new Array([Object.keys(answers).length + questions.length])
        
    //    scoreArray.concat(score)
    //   console.log('The Props', scoreArray)
        

        

       return(
              <div className="card">
               <div className="blocks one">
               <img alt={`Avatar of ${name}`} src={avatarURL}/>
               </div>
               <div className="blocks two">
               <h3>{name}</h3>
               <table>
               <tbody>
               <tr>
                   <td>Answered questions</td>
                   <td className="td-questions">{Object.keys(answers).length}</td>
               </tr>
               <tr>
                   <td>Created questions</td>
                   <td className="td-questions">{questions.length}</td>
               </tr>
               </tbody>
               </table>
          
               </div>
               <div className="blocks three">
                <h3>Score</h3>
                <h4>{score}</h4>
               </div>
             </div>

       )
    }
}

function mapStateToProps({authedUser, users}, {id}){
    const user = users[id]
    
//     const order = {}

//     Object.keys(user).sort().forEach((key) => {
//         order[key] = users[key]
//     })

//    const answer = Object.keys(user.answers).length + user.questions.length

   
// console.log('appTStateProps', user, user.questions.length, authedUser )

   return {
       authedUser,
       user : user,

   }


}


export default connect(mapStateToProps)(Users)