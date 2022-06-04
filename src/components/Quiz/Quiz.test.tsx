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

const mockIncrementScore = jest.fn()
describe('Quiz', () => {
  test('displays a quote', () => {
    render(
      <Quiz
        currentQuote={MOCK_QUOTE}
        score={0}
        incrementScore={mockIncrementScore}
      />
    )
    const quote = screen.getByTestId('quiz-character-quote')
    expect(quote).toBeInTheDocument()
  })

  test('displays four character choices', () => {
    render(
      <Quiz
        currentQuote={MOCK_QUOTE}
        score={0}
        incrementScore={mockIncrementScore}
      />
    )
    const characterChoices = screen.getAllByTestId('quiz-character-choice')
    expect(characterChoices.length).toBe(4)
  })

  // also should test placement in test
  test('on click of a choice, all character choice buttons should be disabled', () => {
    render(
      <Quiz
        currentQuote={MOCK_QUOTE}
        score={0}
        incrementScore={mockIncrementScore}
      />
    )

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[0])
    characterButtons.forEach(button => expect(button).toBeDisabled())
  })

  test('on click of a choice, next button should appear', () => {
    render(
      <Quiz
        currentQuote={MOCK_QUOTE}
        score={0}
        incrementScore={mockIncrementScore}
      />
    )

    const characterButtons = screen.getAllByTestId('quiz-character-choice')
    userEvent.click(characterButtons[0])

    const nextButton = screen.getByRole('button', { name: 'Next' })
    expect(nextButton).toBeInTheDocument()
  })
})
