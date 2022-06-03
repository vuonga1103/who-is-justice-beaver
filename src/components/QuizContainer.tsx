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

export type QuoteState = Quote & {
  characters: Character[]
}

const getCharacters = (
  characters: Character[],
  correctCharacter: Character
) => {
  const charactersExcludingCorrectCharacter = characters.filter(
    ({ _id }) => _id !== correctCharacter._id
  )
  const randomThreeCharacters = _.shuffle(
    charactersExcludingCorrectCharacter
  ).slice(0, 3)
  return _.shuffle([correctCharacter, ...randomThreeCharacters])
}

const getCurrentQuoteWithCharacters = (
  quote: Quote,
  characters: Character[]
) => {
  if (!quote) return null

  const { character: correctCharacter } = quote
  return { ...quote, characters: getCharacters(characters, correctCharacter) }
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

  return (
    <Quiz
      currentQuote={currentQuote}
      // startQuiz={startQuiz}
      // checkAnswer={checkAnswer}
      // getNextQuestion={getNextQuestion}
      // // currentQuote={quotes[currentQuoteIdx]}
      // // currentQuoteIdx={currentQuoteIdx}
    />
  )
}

export default QuizContainer
