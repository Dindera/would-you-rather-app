import React, { Component} from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import '../App.css';
import Login from './LoginPage';
import DashBoard from './DashBoard';
import Nav from './Nav';
import HomePage from './HomePage';
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage';
import QuestionResult from './QuestionResults'
import LoadingBar from 'react-redux-loading'



class App extends Component {
 
  componentDidMount() {
    this.props.dispatch(handleInitialData())

  }

  render() {
    return (
  
     <Router>    
       <div>
      <LoadingBar style={{backgroundColor: 'indigo'}}/>
        {this.props.userLoggedIn === false
      ? 
     ( <div>
      <Nav/>
      <div className="App">
        <div>
        <Route path='/' exact component={HomePage}/>
        <Route path='/add' component={NewQuestion}/> 
        <Route path='/questions/:id' component={QuestionPage}/>
        <Route path='/results/:id' component={QuestionResult}/>
        <Route path='/leaderboard' component={DashBoard}/>     
       </div>
      </div>
      </div>)
      : (
        <div>
        <Nav/>
        <div className="App">
         <Login/>
        </div>
        </div>
      )
        }
        </div>
      </Router>

 
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    userLoggedIn : authedUser === null,    
  }
}



export default connect(mapStateToProps)(App)
