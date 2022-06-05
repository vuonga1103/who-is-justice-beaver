import React from 'react'
import _ from 'lodash'

import { WrinkledPaper } from '../QuizContent/quiz-content-styles'

import failGifs from '../../../images/fail'
import passGifs from '../../../images/pass'
import { ResultImage, Wrapper, TryAgainText } from './summary-styles'
import { COLORS } from '../../../utilities/styles'

interface Props {
  score: number
  totalQuestions: number
  restartQuiz: () => void
}

const Summary: React.FC<Props> = ({ score, totalQuestions, restartQuiz }) => {
  const isPassing = score > 5
  const image = isPassing ? _.sample(passGifs) : _.sample(failGifs)

  return (
    <Wrapper>
      <WrinkledPaper
        rotation="-2"
        style={{
          width: '90%',
          padding: 24,
          marginTop: 48,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ color: COLORS.Blue, fontSize: '1.5rem' }}>
          Your Score:
        </div>
        <p style={{ fontSize: '2rem' }}>
          {score} out of {totalQuestions}
        </p>
        <ResultImage src={image} alt={isPassing ? 'pass' : 'fail'} />
      </WrinkledPaper>

      <WrinkledPaper
        role="button"
        onClick={restartQuiz}
        style={{ cursor: 'pointer' }}
      >
        <TryAgainText>Try Again</TryAgainText>
      </WrinkledPaper>
    </Wrapper>
  )
}

export default Summary
