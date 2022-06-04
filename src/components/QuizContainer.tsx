import React, { useEffect, useState } from 'react'
import axios from 'axios'
import _ from 'lodash'

import Quiz from './Quiz'

import {
  CHARACTERS_API_URL,
  QUOTES_API_URL,
  getResponseData,
} from '../utilities/api'
import { Quote, Character } from '../utilities/types'
import { ERROR_MESSAGE, formatQuote } from './quiz-utils'

const QuizContainer = () => {
  const [quotes, setQuotes] = useState<Quote[] | []>([])
  const [characters, setCharacters] = useState<Character[] | []>([])
  const [error, setError] = useState<string | null>(null)
  const [currentQuoteIdx, setCurrentQuoteIdx] = useState<number>(0)
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    const getQuotes = async () => {
      await axios
        .get(QUOTES_API_URL)
        .then<Quote[]>(getResponseData)
        .then(data => setQuotes(_.shuffle(data)))
        .catch(error => setError(error.message))
    }

    const getCharacters = async () => {
      await axios
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
      currentQuote={formatQuote(quotes[currentQuoteIdx], characters)}
      score={score}
      incrementScore={() => setScore(prev => prev + 1)}
      getNextQuestion={() => setCurrentQuoteIdx(prev => prev + 1)}
      totalQuestions={quotes.length}
      currentQuestion={currentQuoteIdx + 1}
      restartQuiz={() => {
        setCurrentQuoteIdx(0)
        setScore(0)
      }}
      isGameOver={Boolean(quotes.length) && currentQuoteIdx === quotes.length}
    />
  )
}

export default QuizContainer
