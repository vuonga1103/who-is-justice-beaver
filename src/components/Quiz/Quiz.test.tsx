import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Quiz from './Quiz'

const MOCK_QUOTE = {
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

describe('Quiz', () => {
  test('displays a quote', () => {
    const incrementScore = jest.fn()
    const getNextQuestion = jest.fn()

    render(
      <Quiz
        currentQuote={MOCK_QUOTE}
        score={0}
        incrementScore={incrementScore}
        getNextQuestion={getNextQuestion}
        totalQuestions={0}
        currentQuestion={0}
      />
    )
    const quote = screen.getByTestId('quiz-character-quote')
    expect(quote).toBeInTheDocument()
  })

  test('displays four character choices', () => {
    const incrementScore = jest.fn()
    const getNextQuestion = jest.fn()

    render(
      <Quiz
        currentQuote={MOCK_QUOTE}
        score={0}
        incrementScore={incrementScore}
        getNextQuestion={getNextQuestion}
        totalQuestions={0}
        currentQuestion={0}
      />
    )
    const characterChoices = screen.getAllByTestId('quiz-character-choice')
    expect(characterChoices.length).toBe(4)
  })

  test('on click of a choice, all character choice buttons should be disabled', () => {
    const incrementScore = jest.fn()
    const getNextQuestion = jest.fn()

    render(
      <Quiz
        currentQuote={MOCK_QUOTE}
        score={0}
        incrementScore={incrementScore}
        getNextQuestion={getNextQuestion}
        totalQuestions={0}
        currentQuestion={0}
      />
    )

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[0])
    characterButtons.forEach(button => expect(button).toBeDisabled())
  })

  test('on click of a choice, next button should appear', () => {
    const incrementScore = jest.fn()
    const getNextQuestion = jest.fn()

    render(
      <Quiz
        currentQuote={MOCK_QUOTE}
        score={0}
        incrementScore={incrementScore}
        getNextQuestion={getNextQuestion}
        totalQuestions={0}
        currentQuestion={0}
      />
    )

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[0])

    const nextButton = screen.getByRole('button', { name: 'Next' })
    expect(nextButton).toBeInTheDocument()
  })

  test('on click of a choice, correct answer should appear', () => {
    const incrementScore = jest.fn()
    const getNextQuestion = jest.fn()

    render(
      <Quiz
        currentQuote={MOCK_QUOTE}
        score={0}
        incrementScore={incrementScore}
        getNextQuestion={getNextQuestion}
        totalQuestions={0}
        currentQuestion={0}
      />
    )

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[0])

    const correctAnswer = screen.getByText(/Kevin is the answer./i)
    expect(correctAnswer).toBeInTheDocument()
  })

  test('on click of a correct choice, score increments by one', () => {
    const incrementScore = jest.fn()
    const getNextQuestion = jest.fn()

    render(
      <Quiz
        currentQuote={MOCK_QUOTE}
        score={0}
        incrementScore={incrementScore}
        getNextQuestion={getNextQuestion}
        totalQuestions={0}
        currentQuestion={0}
      />
    )

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[2])

    const nextButton = screen.getByRole('button', { name: 'Next' })
    userEvent.click(nextButton)

    expect(incrementScore).toHaveBeenCalledTimes(1)
  })

  test('on click of next button, next question should appear', () => {
    const incrementScore = jest.fn()
    const getNextQuestion = jest.fn()

    render(
      <Quiz
        currentQuote={MOCK_QUOTE}
        score={0}
        incrementScore={incrementScore}
        getNextQuestion={getNextQuestion}
        totalQuestions={0}
        currentQuestion={0}
      />
    )

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[0])

    const nextButton = screen.getByRole('button', { name: 'Next' })
    userEvent.click(nextButton)

    expect(getNextQuestion).toHaveBeenCalledTimes(1)
  })

  test('displays summary card when the user has completed the quiz', () => {
    const incrementScore = jest.fn()
    const getNextQuestion = jest.fn()

    render(
      <Quiz
        currentQuote={null}
        score={0}
        incrementScore={incrementScore}
        getNextQuestion={getNextQuestion}
        totalQuestions={0}
        currentQuestion={0}
      />
    )

    const summaryCard = screen.getByRole('heading', {
      name: /You have completed the quiz/i,
    })

    expect(summaryCard).toBeInTheDocument()
  })
})
