import React, { useState } from 'react'

import { Character, QuoteState } from '../../utilities/types'

import Summary from './Summary'

interface Props {
  currentQuote: QuoteState | null
  score: number
  incrementScore: () => void
  getNextQuestion: () => void
  totalQuestions: number
  currentQuestion: number
  restartQuiz: () => void
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
}) => {
  const [userSelection, setUserSelection] = useState<Character | null>(null)

  if (!currentQuote)
    return (
      <Summary
        score={score}
        totalQuestions={totalQuestions}
        restartQuiz={restartQuiz}
      />
    )

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
    <>
      <h1>Welcome to Who is Justice Beaver?</h1>
      <h2>An Office Quiz Game</h2>
      Question {currentQuestion} / {totalQuestions}
      <div>
        Score: <span data-testid="quiz-score">{score}</span>
      </div>
      <p data-testid="quiz-character-quote">{content}</p>
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
    </>
  )
}

export default Quiz
