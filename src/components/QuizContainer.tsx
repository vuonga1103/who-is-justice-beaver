import axios from 'axios'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'

import {
  CHARACTERS_API_URL,
  Quote,
  Character,
  QUOTES_API_URL,
  getResponseData,
} from '../utils/api'
import Quiz from './Quiz'

const startQuiz = () => {}
const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}
const getNextQuestion = () => {}

export const ERROR_MESSAGE = 'Something went wrong!'

const QuizContainer = () => {
  const [quotes, setQuotes] = useState<Quote[] | []>([])
  const [characters, setCharacters] = useState<Character[] | []>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getQuotes = async () => {
      return await axios
        .get(QUOTES_API_URL)
        .then<Quote[]>(getResponseData)
        .then(data => setQuotes(data))
        .catch(error => setError(error.message))
    }

    const getCharacters = async () => {
      return await axios
        .get(CHARACTERS_API_URL)
        .then<Character[]>(getResponseData)
        .then(data => setCharacters(data))
        .catch(error => setError(error.message))
    }

    getQuotes()
    getCharacters()
  }, [])

  if (error) {
    console.error(error)
    return <h1>{ERROR_MESSAGE}</h1>
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
