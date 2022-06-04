import { AxiosResponse } from 'axios'

const SHARED_API_URL =
  'https://my-json-server.typicode.com/vuonga1103/who-is-justice-beaver-api/'
export const QUOTES_API_URL = `${SHARED_API_URL}quotes`
export const CHARACTERS_API_URL = `${SHARED_API_URL}characters`

export const getResponseData = <T = any>({ data }: AxiosResponse): T =>
  data.hasOwnProperty('data') ? data.data : data
