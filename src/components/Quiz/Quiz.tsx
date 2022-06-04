import React, { useState } from 'react'
import { QuoteState } from '../QuizContainer'
import QuestionCard from './QuestionCard'

type Props = {
  currentQuote: QuoteState | null
}

const TITLE = 'Welcome to Who is Justice Beaver?'
const SUBTITLE = 'An Office Quiz Game'

// quiz should receive
// current place in quiz ex. 1/10
// question, along with answers and correct answers
const Quiz: React.FC<Props> = ({
  currentQuote,
  //  startQuiz, checkAnswer, getNextQuestion
}) => {
  const [areChoicesDisabled, setChoicesDisabled] = useState(false)
  if (!currentQuote) return null

  const { content, characters } = currentQuote

  const handleCharacterClick = (_id: string) => {
    setChoicesDisabled(true)
  }

  const characterChoices = characters.map(({ _id, firstname, lastname }) => (
    <button
      key={_id}
      data-testid="quiz-character-choice"
      disabled={areChoicesDisabled}
      onClick={() => handleCharacterClick(_id)}
    >
      {`${firstname} ${lastname}`}
    </button>
  ))

  return (
    <>
      <h1>{TITLE}</h1>
      <h2>{SUBTITLE}</h2>

      <p data-testid="quiz-character-quote">{content}</p>

      {characterChoices}
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
