import _ from 'lodash'
import React from 'react'

import failGifs from '../../../images/fail'
import passGifs from '../../../images/pass'

interface Props {
  score: number
  totalQuestions: number
}

const Summary: React.FC<Props> = ({ score, totalQuestions }) => {
  const isPassing = score > 5
  const image = isPassing ? _.sample(passGifs) : _.sample(failGifs)

  return (
    <>
      <h1>You have completed the quiz</h1>
      <h2>Your Score is</h2>
      <p>
        {score} out of {totalQuestions}
      </p>
      <img src={image} alt={isPassing ? 'pass' : 'fail'} />
    </>
  )
}

export default Summary
