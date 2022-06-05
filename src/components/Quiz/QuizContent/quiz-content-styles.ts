import styled, { keyframes } from 'styled-components'

import { FONT_FAMILIES, COLORS } from '../../../utilities/styles'

import stickyNoteBackground from '../../../images/wrinkle-paper.png'

export const WrinkledPaper = styled.h4<{ rotation?: string }>`
  padding: 6px 12px;
  margin: 24px 0;
  width: fit-content;
  -webkit-box-shadow: 5px 5px 8px -3px rgba(0, 0, 0, 0.46);
  box-shadow: 5px 5px 8px -3px rgba(0, 0, does 0, 0.46);
  transform: rotate(${props => (props.rotation ? props.rotation : '0')}deg);
  background: url(${stickyNoteBackground}) no-repeat;
  font-family: ${FONT_FAMILIES.Secondary};
`

export const QuestionNumberWrapper = styled.div`
  position: absolute;
  z-index: 1;
  margin-left: -24px;
`

export const ScoreWrapper = styled.div`
  position: absolute;
  z-index: 1;
  margin-right: -24px;
  right: 48px;
`

export const CharacterButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 36px;
  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`

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
