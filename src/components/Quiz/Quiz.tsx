import React from 'react'
import { QuoteState } from '../QuizContainer'
import QuestionCard from './QuestionCard'

type Props = {
  // startQuiz: () => void
  // checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void
  // getNextQuestion: () => void
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
  console.log(currentQuote)
  return (
    <>
      <h1>{TITLE}</h1>
      <h2>{SUBTITLE}</h2>
      <button className="start" onClick={() => {}}>
        Start:
      </button>
      <p className="score">Score:</p>
      <QuestionCard />
      <p>Loading Question</p>
    </>
  )
}

export default Quiz
