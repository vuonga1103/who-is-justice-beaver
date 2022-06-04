import React, { useState } from 'react'
import { QuoteState } from '../QuizContainer'
import QuestionCard from './QuestionCard'

type Props = {
  currentQuote: QuoteState | null
  score: number
  incrementScore: () => void
}

const TITLE = 'Welcome to Who is Justice Beaver?'
const SUBTITLE = 'An Office Quiz Game'

// quiz should receive
// current place in quiz ex. 1/10
// question, along with answers and correct answers
const Quiz: React.FC<Props> = ({
  currentQuote,
  score,
  incrementScore,
  //  startQuiz, checkAnswer, getNextQuestion
}) => {
  const [hasSelectionBeenMade, setSelectionMade] = useState(false)
  if (!currentQuote) return null

  const { content, characters, character } = currentQuote

  const handleCharacterClick = (_id: string) => {
    const isCorrect = _id === character._id
    if (isCorrect) incrementScore()
    setSelectionMade(true)
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

      <div>
        <span data-testid="quiz-score">{score}</span>
      </div>
      <p data-testid="quiz-character-quote">{content}</p>

      {characterChoices}

      {hasSelectionBeenMade ? <button>Next</button> : null}
      {/* <button className="start" onClick={() => {}}>
        Start:
      </button>
      <p className="score">Score:</p>
      <QuestionCard />
      <p>Loading Question</p> */}
    </>
  )
}

export default Quiz
