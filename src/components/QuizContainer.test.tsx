import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { server } from '../mocks/server'
import { QUOTES_API_URL } from '../utils/api'

import QuizContainer from './QuizContainer'

test('display fetched quotes', async () => {
  render(<QuizContainer />)

  const quotes = await screen.findByText(
    /If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice./
  )

  expect(quotes).toBeInTheDocument()
})

test('should display placeholder if quiz fails to fetch', async () => {
  server.use(
    rest.get(QUOTES_API_URL, (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ error: 'error' }))
    })
  )

  render(<QuizContainer />)

  const error = await screen.findByText(/Something went wrong/)
  expect(error).toBeInTheDocument()
})
