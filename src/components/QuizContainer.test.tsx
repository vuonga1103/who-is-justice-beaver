import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { server } from '../mocks/server'
import { QUOTES_API_URL } from '../utils/api'

import QuizContainer from './QuizContainer'

test('displays quiz', async () => {
  render(<QuizContainer />)

  const quiz = await screen.findByRole('heading', {
    name: /Welcome to Who is Justice Beaver?/i,
  })

  expect(quiz).toBeInTheDocument()
})

test('displays placeholder if there is an error', async () => {
  server.use(
    rest.get(QUOTES_API_URL, (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ error: 'error' }))
    })
  )

  render(<QuizContainer />)

  const error = await screen.findByRole('heading', {
    name: /Something went wrong/i,
  })

  expect(error).toBeInTheDocument()
})
