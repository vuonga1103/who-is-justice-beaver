export interface Character {
  _id: string
  firstname: string
  lastname: string
}

export interface Quote {
  _id: string
  content: string
  character: Character
}

export type QuoteState = Quote & {
  characters: Character[]
}
