import {
  MOCK_CHARACTERS_RESPONSE as MOCK_CHARACTERS,
  MOCK_QUOTES_RESPONSE,
} from '../mocks/mockData'
import { getCurrentQuoteWithCharacters } from './utils'

const MOCK_QUOTE = MOCK_QUOTES_RESPONSE[0]
const QUOTE_WITH_CHARACTER = {
  _id: '5e9664cff87ac15464c55f1b',
  content:
    'If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.',
  character: {
    _id: '5e93b4a43af44260882e33b0',
    firstname: 'Michael',
    lastname: 'Scott',
    __v: 0,
  },
  __v: 0,
}

describe('getCurrentQuoteWithCharacters', () => {
  test('returns a quote with four characters', () => {
    const currentQuoteWithCharacters = getCurrentQuoteWithCharacters(
      MOCK_QUOTE,
      MOCK_CHARACTERS
    )
    expect(currentQuoteWithCharacters?.characters.length).toBe(4)
  })

  test('if the quote has a character in its content, the character should not be in the list of character options', () => {
    const currentQuoteWithCharacters = getCurrentQuoteWithCharacters(
      QUOTE_WITH_CHARACTER,
      MOCK_CHARACTERS
    )

    const doesQuoteMentionAnyOfTheCharacters =
      currentQuoteWithCharacters?.characters.some(({ firstname, lastname }) => {
        return (
          QUOTE_WITH_CHARACTER.content.includes(firstname) ||
          QUOTE_WITH_CHARACTER.content.includes(lastname)
        )
      })

    expect(doesQuoteMentionAnyOfTheCharacters).toBe(false)
  })
})
