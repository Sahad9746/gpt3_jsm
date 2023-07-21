import React from 'react'
import './feature.css';

const Feature = ({title,Text}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text'>
         {Text}
      </div>
    </div>
  )
}

export default Feature
