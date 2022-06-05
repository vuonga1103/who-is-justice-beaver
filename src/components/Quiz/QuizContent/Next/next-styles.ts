import styled, { keyframes } from 'styled-components'

import { COLORS } from '../../../../utilities/styles'

export const RightArrow = styled.svg`
  fill: ${COLORS.Blue};
  &:hover {
    fill: ${COLORS.Green};
  }
`

const backAndForthAnimation = keyframes`
0% {
  transform: translateX(0);
}
50% {
  transform: translateX(8px);
}
100% {
  transform: translateX(0);
}
`

export const NextButton = styled.div`
  margin-left: 6px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  animation: ${backAndForthAnimation} 1.5s ease-in-out infinite;
`
