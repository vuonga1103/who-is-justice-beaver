import styled from 'styled-components'
import { COLORS } from '../../../utilities/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const ResultImage = styled.img`
  max-height: 300px;
  max-width: 300px;
  margin: 12px;
  border-radius: 10px;
`

export const TryAgainText = styled.span`
  &:hover {
    color: ${COLORS.Green};
  }
`
