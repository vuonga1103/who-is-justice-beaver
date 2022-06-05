import styled from 'styled-components'

import { COLORS } from '../../../utilities/styles'

export const Wrapper = styled.div`
  border: 1px solid black;
  padding: 2px;
  border-radius: 4px;
  border: 1px solid ${COLORS.DarkGray};
`

export const Button = styled.button`
  width: 300px;
  padding: 8px;
  border: 1px solid ${COLORS.DarkGray};
  border-radius: 4px;
  position: relative;
  top: -4px;
  box-shadow: 2px 4px ${COLORS.DarkGray};
  &:hover:enabled {
    background-color: ${COLORS.LightGray};
    top: -6px;
    transition: all 100ms ease;
    cursor: pointer;
  }
  &:active:enabled {
    top: 0;
    transition: all 100ms ease;
    box-shadow: none;
    cursor: pointer;
  }
`
