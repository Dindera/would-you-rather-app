import React from 'react'


export const ProgressBar = (props) => {

    return (
      <div className='progress-bar'>
          <div className='progress-filler'  style={{width: `${props.percentage}%`}}><span style={{fontSize: 10}}>{props.percentage}%</span></div>
      </div>
    )
}