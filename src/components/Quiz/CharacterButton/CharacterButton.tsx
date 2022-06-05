import React from 'react'
import { COLORS } from '../../../utilities/styles'
import { Wrapper, Button } from './character-button-styles'

interface Props {
  disabled: boolean
  onClick: () => void
  children: React.ReactNode
  isSelected: boolean
  isCorrect: boolean
}

const CharacterButton: React.FC<Props> = ({
  disabled,
  onClick,
  children,
  isSelected,
  isCorrect,
}) => {
  let backgroundColor = COLORS.White
  if (isSelected && isCorrect) backgroundColor = COLORS.LightGreen
  if (isSelected && !isCorrect) backgroundColor = COLORS.LightRed

  return (
    <Wrapper>
      <Button disabled={disabled} onClick={onClick} style={{ backgroundColor }}>
        {children}
      </Button>
    </Wrapper>
  )
}

export default CharacterButton
