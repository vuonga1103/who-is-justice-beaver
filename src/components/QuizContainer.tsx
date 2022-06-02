import React from 'react'
import Quiz from './Quiz/Quiz'

const startQuiz = async () => {}
const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}
const getNextQuestion = () => {}

const QuizContainer = () => {
  return (
    <Quiz
      startQuiz={startQuiz}
      checkAnswer={checkAnswer}
      getNextQuestion={getNextQuestion}
    />
  )
}

export default QuizContainer
