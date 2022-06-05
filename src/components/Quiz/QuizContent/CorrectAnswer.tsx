import React from 'react'

import { COLORS } from '../../../utilities/styles'
import { Character, QuoteState } from '../../../utilities/types'
import { WrinkledPaper } from './quiz-content-styles'

interface Props {
  selectedCharacter: Character
  quote: QuoteState
}

const CorrectAnswer: React.FC<Props> = ({ selectedCharacter, quote }) => {
  const isCorrectSelection = selectedCharacter._id === quote.character._id

  return (
    <WrinkledPaper
      style={{
        margin: '24px auto',
      }}
    >
      <div data-testid="correct-answer">
        {isCorrectSelection ? (
          <span style={{ color: COLORS.Green }}>Correct!</span>
        ) : (
          <span style={{ color: COLORS.Red }}>Incorrect!</span>
        )}{' '}
        <span>
          <span style={{ color: COLORS.Blue }}>
            {quote.character.firstname}{' '}
          </span>
          is the answer.
        </span>
      </div>
    </WrinkledPaper>
  )
}

export default CorrectAnswer
