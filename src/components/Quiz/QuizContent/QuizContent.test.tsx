import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MOCK_QUOTE } from '../Quiz.test'
import QuizContent from './QuizContent'

const incrementScore = jest.fn()
const getNextQuestion = jest.fn()

const quizContentProps = {
  currentQuote: MOCK_QUOTE,
  score: 0,
  incrementScore,
  getNextQuestion,
  totalQuestions: 0,
  currentQuestion: 0,
}

describe('QuizContent', () => {
  test('displays a quote', () => {
    render(<QuizContent {...quizContentProps} />)

    const quote = screen.getByTestId('quiz-character-quote')
    expect(quote).toBeInTheDocument()
  })

  test('displays four character choices', () => {
    render(<QuizContent {...quizContentProps} />)

    const characterChoices = screen.getAllByTestId('quiz-character-choice')
    expect(characterChoices.length).toBe(4)
  })

  test('on click of a choice, all character choice buttons should be disabled', () => {
    render(<QuizContent {...quizContentProps} />)

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[0])
    characterButtons.forEach(button => expect(button).toBeDisabled())
  })

  test('on click of a choice, next button should appear', () => {
    render(<QuizContent {...quizContentProps} />)

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[0])

    const nextButton = screen.getByRole('button', { name: 'Next' })
    expect(nextButton).toBeInTheDocument()
  })

  test('on click of a choice, correct answer should appear', () => {
    render(<QuizContent {...quizContentProps} />)

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[0])

    const correctAnswer = screen.getByTestId('correct-answer')
    expect(correctAnswer).toBeInTheDocument()
  })

  test('on click of a correct choice, score increments by one', () => {
    render(<QuizContent {...quizContentProps} />)

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[2])

    const nextButton = screen.getByRole('button', { name: 'Next' })
    userEvent.click(nextButton)

    expect(incrementScore).toHaveBeenCalledTimes(1)
  })

  test('on click of next button, next question should appear', () => {
    render(<QuizContent {...quizContentProps} />)

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[0])

    const nextButton = screen.getByRole('button', { name: 'Next' })
    userEvent.click(nextButton)

    expect(getNextQuestion).toHaveBeenCalledTimes(1)
  })
})
