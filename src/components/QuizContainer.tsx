import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Quote, QUOTES_API_URL } from '../utils/api'
import Quiz from './Quiz/Quiz'

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
    return <div>Something went wrong</div>
  }

  return (
    <div>
      <pre>{JSON.stringify({ quotes }, null, 2)}</pre>
    </div>
  )
}

export default QuizContainer
