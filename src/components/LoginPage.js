import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { Link } from 'react-router-dom'
import {userLogin} from '../actions/login'



class Login extends Component {
   state = {
       value:  ''
   }

    handleChange = (e) => {

    const val = e.target.value
    this.setState(() => ({
        value : val,
    }))
}

handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props

        dispatch(userLogin(this.state.value))

}

  


    render () {
       const { users } = this.props

       const userIds  = Object.keys(users)
       
       return(
           <div>
               <h2>Welcome to Would You Rather App</h2>

             <form onSubmit={this.handleSubmit} className='form-new-question'>
             <h3 style={{textAlign: 'center'}}> Login </h3>
             <select type='text' placeholder='name' onChange={this.handleChange}>
               <option value={''}>Select User</option>
               {userIds.map((id) => (
                 <option key={id} value={id}>{users[id].name}</option>
               ))
               }
               </select>
               <button 
               type='submit' 
               disabled={this.state.value === ''}
               style={{marginTop: '10px'}}
               >Login</button>   
             </form>
           </div>
       )
    }
}

function mapStateToProps({ users}){


    return {
        users
    }

}


export default connect(mapStateToProps)(Login)