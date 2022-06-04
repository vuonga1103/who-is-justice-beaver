import { MOCK_CHARACTERS, MOCK_QUOTES } from '../mocks/mock-data'
import { formatQuote } from './quiz-utils'

const MOCK_QUOTE = MOCK_QUOTES[0]
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

describe('formatQuote', () => {
  test('returns a quote with four characters', () => {
    const currentQuoteWithCharacters = formatQuote(MOCK_QUOTE, MOCK_CHARACTERS)
    expect(currentQuoteWithCharacters?.characters.length).toBe(4)
  })

  test('should have the correct character in characters', () => {
    const currentQuoteWithCharacters = formatQuote(MOCK_QUOTE, MOCK_CHARACTERS)
    const doesQuoteHaveCorrectCharacter =
      currentQuoteWithCharacters?.characters.find(
        ({ _id }) => _id === QUOTE_WITH_CHARACTER.character._id
      )
    expect(doesQuoteHaveCorrectCharacter).toBeTruthy()
  })

  test("if the quote has a character's name in its content, the character should not be in the list of character options", () => {
    const currentQuoteWithCharacters = formatQuote(
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

    expect(doesQuoteMentionAnyOfTheCharacters).toBeFalsy()
  })
})
