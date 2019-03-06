


export function formatQuestion (question, author) {
    const { id, timestamp } = question
    const { name, avatarURL, answers } = author
  

    return {
      id,
      answers,
      name,
      author,
      timestamp,
      optionOne: {
        votes: question.optionOne.votes,
        text: question.optionOne.text,
      },
      optionTwo: {
        votes: question.optionTwo.votes,
        text : question.optionTwo.text
      },
      avatar: avatarURL,
    }
  }
  

  export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }


 export function userID(authedUser, users) {
  const user = Object.values(users)
  const userr = user.filter((val) => val['id'] === authedUser)
  
    
  for (let index = 0; index < userr.length; index++) {
    let element = userr[index].answers;
  
    let xyz = Object.keys(element)
  
    if(authedUser){

     let ab = xyz.map(id => id)

      
     return ab
    } else if(!authedUser){
  
      alert('Please Login first')
  
      return null 
    }
  
  }
  
  
  }