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
  ScoreWrapper,
  CharacterButtonsWrapper,
  RightArrow,
  NextButton,
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
    <div>
      {isCorrectSelection ? (
        <span style={{ color: COLORS.Green }}>Correct!</span>
      ) : (
        <span style={{ color: COLORS.Red }}>Incorrect!</span>
      )}{' '}
      <span>
        <span style={{ color: COLORS.Blue }}>{quote.character.firstname} </span>
        is the answer.
      </span>
    </div>
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

  const handleNextClick: React.MouseEventHandler<HTMLDivElement> = () => {
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

      <ScoreWrapper data-testid="quiz-score">
        <WrinkledPaper rotation="10" style={{ color: COLORS.Blue }}>
          Score: <span style={{ color: COLORS.Gold }}>{score}</span>
        </WrinkledPaper>
      </ScoreWrapper>

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
        <>
          <WrinkledPaper
            style={{
              margin: '24px auto',
            }}
          >
            {getCorrectAnswer(userSelection, currentQuote)}
          </WrinkledPaper>

          <WrinkledPaper
            style={{
              margin: '24px auto',
              display: 'flex',
              cursor: 'pointer',
            }}
            onClick={handleNextClick}
            role="button"
          >
            <div>Next</div>

            <NextButton>
              <RightArrow
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
                />
              </RightArrow>
            </NextButton>
          </WrinkledPaper>
        </>
      ) : null}

      {/* <div data-testid="quiz-score">{score}</div> */}
    </Wrapper>
  )
}

export default Quiz
