import styled from 'styled-components'

import { COLORS } from '../../../../utilities/styles'

export const Wrapper = styled.div`
  background-color: ${COLORS.LightGray};
  width: 90%;
  border-radius: 15px;
  margin: 24px auto;
  position: relative;
  -webkit-box-shadow: 5px 5px 8px -3px rgba(0, 0, 0, 0.46);
  box-shadow: 5px 5px 8px -3px rgba(0, 0, does 0, 0.46);
  border: 1px solid ${COLORS.DarkGray};
  padding: 1px;
`

export const Progression = styled.div<{ percentage: number }>`
  background-color: ${COLORS.Green};
  border-radius: 15px;
  height: 24px;
  width: ${({ percentage }) => percentage}%;
  transition: all 0.5s linear;
  background: rgb(153, 180, 240);
  background: linear-gradient(
    90deg,
    rgba(153, 180, 240, 1) 0%,
    rgba(47, 84, 165, 1) 100%
  );
`

export const Michael = styled.img<{ percentage: number }>`
  width: 50px;
  position: absolute;
  left: calc(${({ percentage }) => percentage}% - 16px);
  top: -16px;
  transition: all 0.5s linear;
`
