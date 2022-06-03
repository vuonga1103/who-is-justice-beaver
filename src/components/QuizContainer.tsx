import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Quote, QUOTES_API_URL } from '../utils/api'
import Quiz from './Quiz/Quiz'

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}
const getNextQuestion = () => {}

const QuizContainer = () => {
  const [quotes, setQuotes] = useState<Quote[] | []>([])

  useEffect(() => {
    axios
      .get(QUOTES_API_URL)
      .then(response => {
        setQuotes(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <pre>{JSON.stringify({ quotes }, null, 2)}</pre>
    </div>
  )
}

export default QuizContainer
