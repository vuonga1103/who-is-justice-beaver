import React from 'react'

import Summary from './Summary'
import QuizContent from './QuizContent'

import { QuoteState } from '../../utilities/types'
import {
  HeaderWrapper,
  Header,
  Logo,
  QuizTitle,
  HeaderTextWrapper,
  QuizSubtitle,
  Wrapper,
} from './quiz-styles'
import logo from '../../images/logo.png'
import ProgressBar from './QuizContent/ProgressBar'

interface Props {
  currentQuote: QuoteState | null
  score: number
  incrementScore: () => void
  getNextQuestion: () => void
  totalQuestions: number
  currentQuestion: number
  restartQuiz: () => void
  isGameOver: boolean
}

const JUSTICE_BEAVER_URL = 'https://youtu.be/lQszDvVd-pc?t=9'

const Quiz: React.FC<Props> = ({
  currentQuote,
  score,
  incrementScore,
  getNextQuestion,
  totalQuestions,
  currentQuestion,
  restartQuiz,
  isGameOver,
}) => {
  return (
    <Wrapper>
      <a
        href={JUSTICE_BEAVER_URL}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <HeaderWrapper>
          <Header>
            <HeaderTextWrapper>
              <QuizTitle>Who is Justice Beaver?</QuizTitle>
              <QuizSubtitle>An Office Quiz Game</QuizSubtitle>
            </HeaderTextWrapper>

            <Logo src={logo} alt="The office logo" />
          </Header>
        </HeaderWrapper>
      </a>

      {isGameOver ? (
        <Summary
          score={score}
          totalQuestions={totalQuestions}
          restartQuiz={restartQuiz}
        />
      ) : (
        <QuizContent
          currentQuote={currentQuote}
          incrementScore={incrementScore}
          getNextQuestion={getNextQuestion}
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          score={score}
        />
      )}
    </Wrapper>
  )
}

export default Quiz
