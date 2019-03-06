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
        
      if(e.target.name === 'optionOneText'){
        this.setState({
            optionOneText: options,
          })
      }else if(e.target.name === 'optionTwoText'){
        this.setState({
            optionTwoText: options,
          })
      }
    }



    handleSubmit = e => {
        e.preventDefault()

        const { optionOneText, optionTwoText } = this.state;
      
        const { dispatch } = this.props

        dispatch(handleSaveQuestion(optionOneText, optionTwoText))

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
            name='optionOneText'
             />
  
             <h4 className='Or'>OR</h4>
             <input type='text' placeholder='Enter Option Two'
             value={optionTwoText}
             onChange={this.handleChange}
             name='optionTwoText'
             />
             <br/>
             <button type='submit'
             onClick={this.handleSubmit}
             disabled={optionOneText === '' || optionTwoText === ''}
             >
             Submit</button>
            </form>
            </div>
        )
    }
}



export default connect()(NewQuestion)