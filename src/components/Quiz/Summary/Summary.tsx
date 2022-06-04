import React from 'react'
import _ from 'lodash'

import failGifs from '../../../images/fail'
import passGifs from '../../../images/pass'

interface Props {
  score: number
  totalQuestions: number
  restartQuiz: () => void
}

const Summary: React.FC<Props> = ({ score, totalQuestions, restartQuiz }) => {
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
      <button onClick={restartQuiz}>Try Again</button>
    </>
  )
}

export default Summary
