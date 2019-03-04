import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {userLogin} from '../actions/login'

class Nav extends Component {


   handleLogout = (e) => {
       e.preventDefault()
       const { dispatch } = this.props

       dispatch(userLogin(null))

   }
    

    render() {


        const { authedUser, users } = this.props

        const userName = Object.keys(users)

        const username =  userName.map(element => {
            if(authedUser === element){
                return users[element].name
            }
        });
     
        return (
            <nav className='nav'>
              <h1>
                <NavLink to='/' exact activeClassName='active' className='brand-logo'>
                       Would You Rather
                      </NavLink>
                </h1> 
                  
                    {authedUser === null ?
                        <ul className='nav-ul'>
                            <li className='nav-li'>                     
                            <NavLink to='/' exact activeClassName='active'>
                               Home
                              </NavLink>
                            </li>
                             <li className='nav-li'>
                              <NavLink to='/' activeClassName='active'>
                                  New Question
                              </NavLink>
                            </li>
                            <li className='nav-li'>
                            <NavLink to='/' activeClassName='active'>
                               Leader Board
                              </NavLink>
                              </li>  
                              </ul>
                         : 
                            <ul className='nav-ul'>
                              <li className='nav-li'>                     
                               <NavLink to='/' exact activeClassName='active'>
                                Home
                              </NavLink>
                            </li>
                          <li className='nav-li'>
                        <NavLink to='/new' activeClassName='active'>
                            New Question
                        </NavLink>
                      </li>
                      <li className='nav-li'>
                      <NavLink to='/dashboard' activeClassName='active'>
                         Leader Board
                        </NavLink>
                        </li>  
                      <li className='loginUser'>
                            Hello, {username}
                      </li>
                      <li className='nav-li'>
                        <NavLink to='/login' activeClassName='active' onClick={this.handleLogout} >
                            Logout
                     </NavLink>                   
                     </li>
                    </ul>        
                    }
            </nav>
        )
    }

}

function mapStateToProps ({authedUser, users}) {

    return {
        authedUser,
        users,
    }


}

export default connect(mapStateToProps)(Nav)