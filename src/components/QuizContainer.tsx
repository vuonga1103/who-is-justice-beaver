import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Quote, QUOTES_API_URL } from '../utils/api'
import Quiz from './Quiz'

const startQuiz = () => {}
const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}
const getNextQuestion = () => {}

const QuizContainer = () => {
  const [quotes, setQuotes] = useState<Quote[] | []>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getQuotes = async () => {
      return await axios
        .get(QUOTES_API_URL)
        .then(({ data }) => {
          if (data) setQuotes(data)
        })
        .catch(error => setError(error.message))
    }

    getQuotes()
  }, [])

  if (error) {
    console.error(error)
    return <h1>Something went wrong</h1>
  }

  return (
    <Quiz
      startQuiz={startQuiz}
      checkAnswer={checkAnswer}
      getNextQuestion={getNextQuestion}
    />
  )
}

export default QuizContainer
