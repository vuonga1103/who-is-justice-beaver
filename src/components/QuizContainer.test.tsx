import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { server } from '../mocks/server'
import { CHARACTERS_API_URL, QUOTES_API_URL } from '../utils/api'

import QuizContainer, { ERROR_MESSAGE } from './QuizContainer'

const getMockErrorResponse = (url: string) => {
  return rest.get(url, (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ error: 'error' }))
  })
}

test('displays quiz', async () => {
  render(<QuizContainer />)

  const quiz = await screen.findByRole('heading', {
    name: /Welcome to Who is Justice Beaver?/i,
  })

  expect(quiz).toBeInTheDocument()
})

test('displays placeholder if there is an error fetching quotes', async () => {
  server.use(getMockErrorResponse(QUOTES_API_URL))

  render(<QuizContainer />)

  const error = await screen.findByRole('heading', {
    name: ERROR_MESSAGE,
  })

  expect(error).toBeInTheDocument()
})

test('displays placeholder if there is an error fetching characters', async () => {
  server.use(getMockErrorResponse(CHARACTERS_API_URL))

  render(<QuizContainer />)

  const error = await screen.findByRole('heading', {
    name: ERROR_MESSAGE,
  })

  expect(error).toBeInTheDocument()
})
