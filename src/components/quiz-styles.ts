import styled from 'styled-components'

import { COLORS, FONT_FAMILY } from '../utilities/styles'

export const Wrapper = styled.div`
  margin: 84px 48px;
  padding: 36px;
  height: calc(100vh - 84px - 84px);
  width: calc(100vw - 48px - 48px);
  overflow: auto;
  font-family: ${FONT_FAMILY.Primary};
  color: ${COLORS.Black};
  background: rgba(194, 194, 194, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`
