import React from 'react'

import progressionIcon from '../../../../images/progression-icon.png'

import { Wrapper, Progression, Michael } from './progress-bar-styles'

const ProgressBar = ({ progression }: { progression: number }) => {
  const progressionPercentage = Math.round(progression * 100)

  return (
    <Wrapper>
      <Progression percentage={progressionPercentage} />
      <Michael
        src={progressionIcon}
        alt="Progression Icon"
        percentage={progressionPercentage}
      />
    </Wrapper>
  )
}

export default ProgressBar
