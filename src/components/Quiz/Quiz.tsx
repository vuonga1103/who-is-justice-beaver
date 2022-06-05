import React, { useState } from 'react'

import Summary from './Summary'
import QuizButton from './QuizButton'

import { Character, QuoteState } from '../../utilities/types'
import {
  HeaderWrapper,
  Header,
  Logo,
  QuizTitle,
  HeaderTextWrapper,
  QuizSubtitle,
  Wrapper,
  WrinkledPaper,
  QuestionNumberWrapper,
  CharacterButtonsWrapper,
} from './quiz-styles'
import logo from '../../images/logo.png'
import { COLORS } from '../../utilities/styles'

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

const getCorrectAnswer = (selectedCharacter: Character, quote: QuoteState) => {
  const isCorrectSelection = selectedCharacter._id === quote.character._id

  return (
    <>
      {isCorrectSelection ? (
        <span style={{ color: COLORS.Green }}>Correct!</span>
      ) : (
        <span style={{ color: COLORS.Red }}>Incorrect!</span>
      )}{' '}
      <span style={{ color: COLORS.Blue }}>{quote.character.firstname}</span> is
      the answer.
    </>
  )
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
  const [userSelection, setUserSelection] = useState<Character | null>(null)

  if (isGameOver)
    return (
      <Summary
        score={score}
        totalQuestions={totalQuestions}
        restartQuiz={restartQuiz}
      />
    )

  if (!currentQuote) return null

  const { content, characters, character } = currentQuote

  const handleCharacterClick = (selectedCharacter: Character) => {
    const isCorrect = selectedCharacter._id === character._id
    if (isCorrect) incrementScore()
    setUserSelection(selectedCharacter)
  }

  const handleNextClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    getNextQuestion()
    setUserSelection(null)
  }

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
      <QuestionNumberWrapper>
        <WrinkledPaper rotation="-10">
          Question <span style={{ color: COLORS.Blue }}>{currentQuestion}</span>
          /{totalQuestions}
        </WrinkledPaper>
      </QuestionNumberWrapper>

      <WrinkledPaper
        data-testid="quiz-character-quote"
        style={{ marginTop: 52, width: '100%', padding: '24px' }}
        rotation="1"
      >
        {content}
      </WrinkledPaper>

      <CharacterButtonsWrapper>
        {characters.map(character => {
          const { _id, firstname, lastname } = character
          console.log(userSelection)
          const isSelected = Boolean(userSelection && userSelection._id === _id)

          return (
            <QuizButton
              key={_id}
              data-testid="quiz-character-choice"
              disabled={Boolean(userSelection)}
              onClick={() => handleCharacterClick(character)}
              isSelected={isSelected}
              isCorrect={character._id === currentQuote.character._id}
            >
              {`${firstname} ${lastname}`}
            </QuizButton>
          )
        })}
      </CharacterButtonsWrapper>

      {userSelection ? (
        <WrinkledPaper rotation="-1" style={{ margin: '24px auto' }}>
          {getCorrectAnswer(userSelection, currentQuote)}
        </WrinkledPaper>
      ) : null}

      {Boolean(userSelection) ? (
        <button onClick={handleNextClick}>Next</button>
      ) : null}

      <div>
        Score: <span data-testid="quiz-score">{score}</span>
      </div>
    </Wrapper>
  )
}

export default Quiz
