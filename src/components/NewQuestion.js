import React, {Component }from "react";
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'



class NewQuestion extends Component {

    state = {
       optionOneText: '',
       optionTwoText: '',
       toHome: false,
    }

    handleChange = e => {
        const options = e.target.value

        this.setState({
          optionOneText: options,
        })
    }

    handleChange2 = e => {
        const options = e.target.value 

        this.setState(() => ({
          optionTwoText: options,
        }))
    }




    handleSubmit = e => {
        e.preventDefault()

        const { optionOneText, optionTwoText } = this.state;
      
        const { dispatch , authedUser} = this.props

        const author = authedUser
        dispatch(handleSaveQuestion({optionOneText, optionTwoText, author}))

        this.setState(() => ({
          optionOne: '',
          optionTwo: '',
          toHome: true,
        }))

    }
        render(){
            const { optionOneText, optionTwoText, toHome } = this.state
            
            if(toHome === true){
                return <Redirect to='/'/> 
            }

        return (
            <div>
            <h3>Create A New Question</h3>

            <form className='form-new-question' onSubmit={this.handleSubmit}>
             <p>Complete the question: </p>
             <h4>Would You Rather...</h4>
             <input type='text' placeholder='Enter Option One'
             value={optionOneText}
             onChange={this.handleChange}
            
             />
  
             <h4 className='Or'>OR</h4>
             <input type='text' placeholder='Enter Option Two'
             value={optionTwoText}
             onChange={this.handleChange2}
     
             />
             <br/>
             <button type='submit'
             disabled={optionOneText === '' || optionTwoText === ''}
             >
             Submit</button>
            </form>
            </div>
        )
    }
}

function mapStateToProps({questions, users}){

    return{
        questions,
        users
    }
}

export default connect(mapStateToProps)(NewQuestion)