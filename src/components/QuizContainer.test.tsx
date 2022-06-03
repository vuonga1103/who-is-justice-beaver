import { render, screen } from '@testing-library/react'

import QuizContainer from './QuizContainer'

test('display fetched quotes', async () => {
  render(<QuizContainer />)

  const quotes = await screen.findByText(
    /If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice./
  )

  expect(quotes).toBeInTheDocument()
})
