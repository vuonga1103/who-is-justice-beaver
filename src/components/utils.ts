import _ from 'lodash'
import { Character, Quote } from '../utils/api'

export const getCharacters = (quote: Quote, characters: Character[]) => {
  const { character: correctCharacter, content } = quote
  const filteredCharacters = characters.filter(
    ({ _id, firstname, lastname }) => {
      const isCorrectCharacter = _id === correctCharacter._id
      const isCharacterInQuote =
        content.includes(firstname) || content.includes(lastname)

      return !isCorrectCharacter && !isCharacterInQuote
    }
  )

  const randomThreeCharacters = _.shuffle(filteredCharacters).slice(0, 3)

  return _.shuffle([correctCharacter, ...randomThreeCharacters])
}

export const getCurrentQuoteWithCharacters = (
  quote: Quote,
  characters: Character[]
) => {
  if (!quote) return null

  return { ...quote, characters: getCharacters(quote, characters) }
}
