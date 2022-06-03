const SHARED_API_URL =
  'https://my-json-server.typicode.com/vuonga1103/who-is-justice-beaver-api/'
export const QUOTES_API_URL = `${SHARED_API_URL}quotes`
export const CHARACTERS_API_URL = `${SHARED_API_URL}characters`

export type Character = {
  _id: string
  firstname: string
  lastname: string
}

export type Quote = {
  _id: string
  content: string
  character: Character
}
