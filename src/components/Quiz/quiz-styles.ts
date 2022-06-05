import styled from 'styled-components'

import { BREAKPOINTS, COLORS, FONT_FAMILY } from '../../utilities/styles'
import stickyNoteBackground from '../../images/wrinkle-paper.png'

export const Wrapper = styled.div`
  margin: 84px 48px;
  padding: 36px;
  min-height: 600px;
  max-width: 900px;
  overflow: auto;
  font-family: ${FONT_FAMILY.Primary};
  color: ${COLORS.Black};
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  position: relative;

  ${BREAKPOINTS.Mobile} {
    margin: 24px;
    padding: 24px;
  }
`

export const HeaderWrapper = styled.div`
  margin-top: -50px;
  background: ${COLORS.Black};
  color: ${COLORS.White};
  border-radius: 10px;
  padding: 6px;
  max-width: 800px;
  margin: 0 auto;
`

export const Header = styled.div`
  border: 2px solid ${COLORS.White};
  border-radius: 10px;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  ${BREAKPOINTS.Mobile} {
    padding: 6px 12px;
  }
`
export const Logo = styled.img`
  border: 3px solid ${COLORS.White};
  padding: 16px;
  border-radius: 10px;
  width: 150px;
  height: 150px;
  object-fit: contain;
  align-self: center;
  @media (max-width: 750px) {
    width: 100px;
    height: 100px;
    padding: 8px;
  }
  ${BREAKPOINTS.Mobile} {
    display: block;
    width: 75px;
    height: 75px;
    border: 2px solid ${COLORS.White};
  }
`

export const HeaderTextWrapper = styled.div`
  margin-right: 24px;
  align-self: center;
  line-height: 1;
`

export const QuizTitle = styled.h2`
  font-size: 3rem;
  ${BREAKPOINTS.Tablet} {
    font-size: 2rem;
  }
  ${BREAKPOINTS.Mobile} {
    font-size: 1rem;
  }
`

export const QuizSubtitle = styled.h3`
  margin-top: 6px;
  font-size: 1.5rem;
  font-style: italic;
  ${BREAKPOINTS.Tablet} {
    font-size: 1rem;
  }
  ${BREAKPOINTS.Mobile} {
    font-size: 0.5rem;
  }
`

export const WrinkledPaper = styled.h4<{ rotation?: string }>`
  margin: 24px 0;
  width: fit-content;
  -webkit-box-shadow: 5px 5px 8px -3px rgba(0, 0, 0, 0.46);
  box-shadow: 5px 5px 8px -3px rgba(0, 0, does 0, 0.46);
  transform: rotate(${props => (props.rotation ? props.rotation : '0')}deg);
  background: url(${stickyNoteBackground}) no-repeat;
  font-family: ${FONT_FAMILY.Secondary};
`

export const QuestionNumberWrapper = styled.div`
  position: absolute;
  z-index: 1;
  margin-left: -24px;
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
