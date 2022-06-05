import React, { useState } from 'react'

import QuizButton from '../QuizButton'
import CorrectAnswer from './CorrectAnswer'
import Next from './Next'

import {
  QuestionNumberWrapper,
  WrinkledPaper,
  ScoreWrapper,
  CharacterButtonsWrapper,
} from './quiz-content-styles'
import { COLORS } from '../../../utilities/styles'
import { Character, QuoteState } from '../../../utilities/types'
import ProgressBar from './ProgressBar'

interface Props {
  currentQuote: QuoteState | null
  incrementScore: () => void
  getNextQuestion: () => void
  currentQuestion: number
  totalQuestions: number
  score: number
}

const QuizContent: React.FC<Props> = ({
  currentQuote,
  incrementScore,
  getNextQuestion,
  currentQuestion,
  totalQuestions,
  score,
}) => {
  const [userSelection, setUserSelection] = useState<Character | null>(null)

  if (!currentQuote) return null

  const { content, characters, character } = currentQuote

  const handleCharacterClick = (selectedCharacter: Character) => {
    const isCorrect = selectedCharacter._id === character._id
    if (isCorrect) incrementScore()
    setUserSelection(selectedCharacter)
  }

  const handleNextClick: React.MouseEventHandler<HTMLDivElement> = () => {
    getNextQuestion()
    setUserSelection(null)
  }

  return (
    <>
      <ProgressBar progression={currentQuestion / totalQuestions} />
      <section data-testid="quiz-content">
        <QuestionNumberWrapper>
          <WrinkledPaper rotation="-10">
            Question{' '}
            <span style={{ color: COLORS.Blue }}>{currentQuestion}</span>/
            {totalQuestions}
          </WrinkledPaper>
        </QuestionNumberWrapper>

        <ScoreWrapper data-testid="quiz-score">
          <WrinkledPaper rotation="10" style={{ color: COLORS.Blue }}>
            Score: <span style={{ color: COLORS.Gold }}>{score}</span>
          </WrinkledPaper>
        </ScoreWrapper>

        <WrinkledPaper
          data-testid="quiz-character-quote"
          style={{ marginTop: 52, width: '100%', padding: '24px' }}
          rotation="1"
        >
          {content}
        </WrinkledPaper>

        <CharacterButtonsWrapper>
          {characters.map(character => {
            const { _id, firstname, lastname } = character

            const isSelected = Boolean(
              userSelection && userSelection._id === _id
            )

            return (
              <QuizButton
                key={_id}
                disabled={Boolean(userSelection)}
                onClick={() => handleCharacterClick(character)}
                isSelected={isSelected}
                isCorrect={character._id === currentQuote.character._id}
              >
                {`${firstname} ${lastname}`}
              </QuizButton>
            )
          })}
        </CharacterButtonsWrapper>

        {userSelection ? (
          <>
            <CorrectAnswer
              selectedCharacter={userSelection}
              quote={currentQuote}
            />
            <Next onClick={handleNextClick} />
          </>
        ) : null}
      </section>
    </>
  )
}

export default QuizContent
