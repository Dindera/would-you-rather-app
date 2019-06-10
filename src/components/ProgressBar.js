import React from 'react'


export const ProgressBar = (props) => {

    return (
      <div className='progress-bar'>
          <div className='progress-filler'  style={{width: `${props.percentage}%`}}></div>
      </div>
    )
}