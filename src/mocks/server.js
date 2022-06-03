import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures the server to respond to requests with the specified handlers.
export const server = setupServer(...handlers)
