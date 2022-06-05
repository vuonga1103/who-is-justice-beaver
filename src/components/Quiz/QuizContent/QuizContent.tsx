import React, { useState } from 'react'

import QuizButton from '../QuizButton'

import {
  QuestionNumberWrapper,
  WrinkledPaper,
  ScoreWrapper,
  CharacterButtonsWrapper,
  RightArrow,
  NextButton,
} from './quiz-content-styles'
import { COLORS } from '../../../utilities/styles'
import { Character, QuoteState } from '../../../utilities/types'

interface Props {
  currentQuote: QuoteState | null
  incrementScore: () => void
  getNextQuestion: () => void
  currentQuestion: number
  totalQuestions: number
  score: number
}

const getCorrectAnswer = (selectedCharacter: Character, quote: QuoteState) => {
  const isCorrectSelection = selectedCharacter._id === quote.character._id

  return (
    <div data-testid="correct-answer">
      {isCorrectSelection ? (
        <span style={{ color: COLORS.Green }}>Correct!</span>
      ) : (
        <span style={{ color: COLORS.Red }}>Incorrect!</span>
      )}{' '}
      <span>
        <span style={{ color: COLORS.Blue }}>{quote.character.firstname} </span>
        is the answer.
      </span>
    </div>
  )
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
    <section data-testid="quiz-content">
      <QuestionNumberWrapper>
        <WrinkledPaper rotation="-10">
          Question <span style={{ color: COLORS.Blue }}>{currentQuestion}</span>
          /{totalQuestions}
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

          const isSelected = Boolean(userSelection && userSelection._id === _id)

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
          <WrinkledPaper
            style={{
              margin: '24px auto',
            }}
          >
            {getCorrectAnswer(userSelection, currentQuote)}
          </WrinkledPaper>

          <WrinkledPaper
            style={{
              margin: '24px auto',
              display: 'flex',
              cursor: 'pointer',
            }}
            onClick={handleNextClick}
            role="button"
          >
            <div>Next</div>

            <NextButton>
              <RightArrow
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
                />
              </RightArrow>
            </NextButton>
          </WrinkledPaper>
        </>
      ) : null}
    </section>
  )
}

export default QuizContent
