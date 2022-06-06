import { render, screen } from '@testing-library/react'
import { COLORS } from '../../../utilities/styles'

import QuizButton from './QuizButton'
import { MOCK_QUOTE } from '../Quiz.test'

const MOCK_CHARACTER = MOCK_QUOTE.characters[0]
const onClick = jest.fn()
const quizButtonProps = {
  onClick,
  children: (
    <span>{`${MOCK_CHARACTER.firstname} ${MOCK_CHARACTER.lastname}`}</span>
  ),
}

describe('QuizButton', () => {
  test('background color is light green if selected and correct', () => {
    render(<QuizButton {...quizButtonProps} isSelected isCorrect />)

    const button = screen.getByRole('button')
    expect(button).toHaveStyle(`background-color: ${COLORS.LightGreen}`)
  })

  test('background color is light red if selected and incorrect', () => {
    render(<QuizButton {...quizButtonProps} isSelected isCorrect={false} />)

    const button = screen.getByRole('button')
    expect(button).toHaveStyle(`background-color: ${COLORS.LightRed}`)
  })
})
