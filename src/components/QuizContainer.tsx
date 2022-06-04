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
import { getCurrentQuoteWithCharacters } from './utils'

const startQuiz = () => {}
const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}
const getNextQuestion = () => {}

export const ERROR_MESSAGE = 'Something went wrong!'

export type QuoteState = Quote & {
  characters: Character[]
}

const QuizContainer = () => {
  const [quotes, setQuotes] = useState<Quote[] | []>([])
  const [characters, setCharacters] = useState<Character[] | []>([])
  const [error, setError] = useState<string | null>(null)
  const [currentQuoteIdx, setCurrentQuoteIdx] = useState<number>(0)

  useEffect(() => {
    const getQuotes = async () => {
      return await axios
        .get(QUOTES_API_URL)
        .then<Quote[]>(getResponseData)
        .then(data => setQuotes(_.shuffle(data)))
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

  const currentQuote = getCurrentQuoteWithCharacters(
    quotes[currentQuoteIdx],
    characters
  )

  return <Quiz currentQuote={currentQuote} />
}

export default QuizContainer
