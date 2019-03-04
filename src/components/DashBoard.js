import React, { Component } from 'react'
import { connect } from 'react-redux';
import Users from './Users'


class DashBoard extends Component {



    render () {

        const { userIds} = this.props
       return(
           <div>
               {/* <h2>Dash Board</h2> */}
               <ul>
               {userIds.map((user) => (
               <li key={user}>
                <Users id={user}/>
                
           </li>
                ))}

               </ul>       
           </div>
       )
    }
}

function mapStateToProps({users}){

    const user = Object.keys(users)
    const userids = user.map((id) => id).sort((a, b) => {

        let ansa = users[a].answers
        let ansb = users[b].answers
        const anssa = Object.keys(ansa)
        const anssb = Object.keys(ansb)

       return (users[b].questions.length + anssb.length) - (users[a].questions.length + anssa.length)
    })
    
    return {
       userIds: userids,
       
    }
}


export default connect(mapStateToProps)(DashBoard)