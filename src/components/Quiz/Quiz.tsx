import React, { useState } from 'react'
import { QuoteState } from '../QuizContainer'
import QuestionCard from './QuestionCard'

type Props = {
  currentQuote: QuoteState | null
  score: number
  incrementScore: () => void
  getNextQuestion: () => void
  totalQuestions: number
  currentQuestion: number
}

const TITLE = 'Welcome to Who is Justice Beaver?'
const SUBTITLE = 'An Office Quiz Game'

const Quiz: React.FC<Props> = ({
  currentQuote,
  score,
  incrementScore,
  getNextQuestion,
  totalQuestions,
  currentQuestion,
}) => {
  const [hasSelectionBeenMade, setSelectionMade] = useState(false)
  if (!currentQuote) return null

  const { content, characters, character } = currentQuote

  const handleCharacterClick = (_id: string) => {
    const isCorrect = _id === character._id
    if (isCorrect) incrementScore()
    setSelectionMade(true)
  }

  const onNextClick = () => {
    getNextQuestion()
    setSelectionMade(false)
  }

  const characterChoices = characters.map(({ _id, firstname, lastname }) => (
    <button
      key={_id}
      data-testid="quiz-character-choice"
      disabled={hasSelectionBeenMade}
      onClick={() => handleCharacterClick(_id)}
    >
      {`${firstname} ${lastname}`}
    </button>
  ))

  console.log(currentQuote)

  return (
    <>
      <h1>{TITLE}</h1>
      <h2>{SUBTITLE}</h2>
      Question {currentQuestion} / {totalQuestions}
      <div>
        Score: <span data-testid="quiz-score">{score}</span>
      </div>
      <p data-testid="quiz-character-quote">{content}</p>
      {characterChoices}
      {hasSelectionBeenMade ? (
        <button onClick={onNextClick}>Next</button>
      ) : null}
    </>
  )
}

export default Quiz
