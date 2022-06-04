import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Summary from './Summary'

const restartQuiz = jest.fn()
const summaryProps = {
  score: 0,
  totalQuestions: 10,
  restartQuiz,
}

describe('Summary', () => {
  test("displays user's score", () => {
    render(<Summary {...{ ...summaryProps, score: 9 }} />)

    const score = screen.getByText(/9 out of 10/i)
    expect(score).toBeInTheDocument()
  })

  test('if score is 5 or less, displays a fail gif', () => {
    render(<Summary {...{ ...summaryProps, score: 5 }} />)

    const failGif = screen.getByAltText(/fail/i)
    expect(failGif).toBeInTheDocument()
  })

  test('if score is 6 or more, displays a pass gif', () => {
    render(<Summary {...{ ...summaryProps, score: 6 }} />)

    const passGif = screen.getByAltText(/pass/i)
    expect(passGif).toBeInTheDocument()
  })

  test('clicking restart button will restart the quiz', () => {
    render(<Summary {...{ ...summaryProps }} />)

    const restartButton = screen.getByRole('button', { name: /try again/i })
    userEvent.click(restartButton)
    expect(restartQuiz).toHaveBeenCalled()
  })
})
