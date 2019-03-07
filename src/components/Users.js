import React, { Component } from 'react'
import { connect } from 'react-redux';

class Users extends Component {

    render () {

    const { user} = this.props
       

        
    const {name, answers, questions, avatarURL } = user
        


    const score = new Array([Object.keys(answers).length + questions.length])
        
        

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

   return {
       authedUser,
       user : user,

   }


}


export default connect(mapStateToProps)(Users)