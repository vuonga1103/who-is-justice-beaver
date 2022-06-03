import { rest } from 'msw'

import { QUOTES_API_URL, CHARACTERS_API_URL } from '../utils/api'
import { MOCK_QUOTES_RESPONSE, MOCK_CHARACTERS_RESPONSE } from './mockData'

export const handlers = [
  rest.get(QUOTES_API_URL, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(MOCK_QUOTES_RESPONSE))
  ),
  rest.get(CHARACTERS_API_URL, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(MOCK_CHARACTERS_RESPONSE))
  ),
]
