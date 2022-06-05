import { render, screen } from '@testing-library/react'

import Quiz from './Quiz'

export const MOCK_QUOTE = {
  _id: '5e9666d76a66e65486e2449e',
  content: 'I am immensely proud of what I did for that turtle!',
  character: {
    _id: '5e93b5323af44260882e33b7',
    firstname: 'Kevin',
    lastname: 'Malone',
    __v: 0,
  },
  __v: 0,
  characters: [
    {
      _id: '5e93b4f03af44260882e33b1',
      firstname: 'Jim',
      lastname: 'Halpert',
      __v: 0,
    },
    {
      _id: '5e93b55f3af44260882e33bc',
      firstname: 'Toby',
      lastname: 'Flenderson',
      __v: 0,
    },
    {
      _id: '5e93b5323af44260882e33b7',
      firstname: 'Kevin',
      lastname: 'Malone',
      __v: 0,
    },
    {
      _id: '5e93b52b3af44260882e33b6',
      firstname: 'Angela',
      lastname: 'Martin',
      __v: 0,
    },
  ],
}

const incrementScore = jest.fn()
const getNextQuestion = jest.fn()
const restartQuiz = jest.fn()

const quizProps = {
  currentQuote: MOCK_QUOTE,
  score: 0,
  incrementScore,
  getNextQuestion,
  totalQuestions: 0,
  currentQuestion: 0,
  restartQuiz,
  isGameOver: false,
}

describe('Quiz', () => {
  test('displays quiz content when game is in play', () => {
    render(<Quiz {...quizProps} />)
    const quizContent = screen.getByTestId('quiz-content')
    expect(quizContent).toBeInTheDocument()
  })

  test('displays summary when game is over', () => {
    render(<Quiz {...quizProps} isGameOver />)
    const quizSummary = screen.getByText(/Your Score/i)
    expect(quizSummary).toBeInTheDocument()
  })
})
