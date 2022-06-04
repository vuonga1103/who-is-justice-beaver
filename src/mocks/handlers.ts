import { rest } from 'msw'

import { QUOTES_API_URL, CHARACTERS_API_URL } from '../utilities/api'
import { MOCK_QUOTES, MOCK_CHARACTERS } from './mock-data'

export const handlers = [
  rest.get(QUOTES_API_URL, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(MOCK_QUOTES))
  ),
  rest.get(CHARACTERS_API_URL, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(MOCK_CHARACTERS))
  ),
]
