import React, { Component , Fragment} from 'react';
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
      // <Fragment>
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
        <Route path='/new' component={NewQuestion}/> 
        <Route path='/question/:id' component={QuestionPage}/>
        <Route path='/dashboard' component={DashBoard}/>
        <Route path='/result' component={QuestionResult}/>
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
      // </Fragment>
 
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    userLoggedIn : authedUser === null,
    
  }
}



export default connect(mapStateToProps)(App)
