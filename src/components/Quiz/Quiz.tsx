import React from 'react'
import QuestionCard from './QuestionCard'

type Props = {
  startQuiz: () => void
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void
  getNextQuestion: () => void
}

const TITLE = 'Who is Justice Beaver?'
const SUBTITLE = 'An Office Quiz Game'

const Quiz: React.FC<Props> = ({ startQuiz, checkAnswer, getNextQuestion }) => {
  return (
    <>
      <h1>{TITLE}</h1>
      <h2>{SUBTITLE}</h2>
      <button className="start" onClick={startQuiz}>
        Start:
      </button>
      <p className="score">Score:</p>
      <QuestionCard />
      <p>Loading Question</p>
    </>
  )
}

export default Quiz
