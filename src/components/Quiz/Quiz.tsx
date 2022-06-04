import React, { useState } from 'react'

import { Character, QuoteState } from '../../utilities/types'
import {
  HeaderWrapper,
  Header,
  Logo,
  QuizTitle,
  HeaderTextWrapper,
  QuizSubtitle,
  Wrapper,
  WrinkledPaper,
  QuestionNumberWrapper,
} from './quiz-styles'
import logo from '../../images/logo.png'

import Summary from './Summary'
import { COLORS } from '../../utilities/styles'

interface Props {
  currentQuote: QuoteState | null
  score: number
  incrementScore: () => void
  getNextQuestion: () => void
  totalQuestions: number
  currentQuestion: number
  restartQuiz: () => void
  isGameOver: boolean
}

const getCorrectAnswer = (selectedCharacter: Character, quote: QuoteState) => {
  const isCorrectSelection = selectedCharacter._id === quote.character._id
  const correctAnswer = `${quote.character.firstname} is the answer.`
  if (isCorrectSelection) return `Correct! ${correctAnswer}`
  return `Incorrect! ${correctAnswer}`
}

const Quiz: React.FC<Props> = ({
  currentQuote,
  score,
  incrementScore,
  getNextQuestion,
  totalQuestions,
  currentQuestion,
  restartQuiz,
  isGameOver,
}) => {
  const [userSelection, setUserSelection] = useState<Character | null>(null)

  if (isGameOver)
    return (
      <Summary
        score={score}
        totalQuestions={totalQuestions}
        restartQuiz={restartQuiz}
      />
    )

  if (!currentQuote) return null

  const { content, characters, character } = currentQuote

  const handleCharacterClick = (selectedCharacter: Character) => {
    const isCorrect = selectedCharacter._id === character._id
    if (isCorrect) incrementScore()
    setUserSelection(selectedCharacter)
  }

  const handleNextClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    getNextQuestion()
    setUserSelection(null)
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>
          <HeaderTextWrapper>
            <QuizTitle>Who is Justice Beaver?</QuizTitle>
            <QuizSubtitle>An Office Quiz Game</QuizSubtitle>
          </HeaderTextWrapper>

          <Logo src={logo} alt="The office logo" />
        </Header>
      </HeaderWrapper>
      <QuestionNumberWrapper>
        <WrinkledPaper rotated style={{ padding: '6px 12px' }}>
          Question <span style={{ color: COLORS.Blue }}>{currentQuestion}</span>
          /{totalQuestions}
        </WrinkledPaper>
      </QuestionNumberWrapper>

      <WrinkledPaper
        data-testid="quiz-character-quote"
        style={{ marginTop: 52, width: '100%', padding: '6px 24px' }}
      >
        <div style={{ padding: 12 }}>{content}</div>
      </WrinkledPaper>

      {characters.map(character => {
        const { _id, firstname, lastname } = character
        return (
          <button
            key={_id}
            data-testid="quiz-character-choice"
            disabled={Boolean(userSelection)}
            onClick={() => handleCharacterClick(character)}
          >
            {`${firstname} ${lastname}`}
          </button>
        )
      })}
      {userSelection ? getCorrectAnswer(userSelection, currentQuote) : null}
      {Boolean(userSelection) ? (
        <button onClick={handleNextClick}>Next</button>
      ) : null}

      <div>
        Score: <span data-testid="quiz-score">{score}</span>
      </div>
    </Wrapper>
  )
}

export default Quiz
