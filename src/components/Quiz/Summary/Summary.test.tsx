import { render, screen } from '@testing-library/react'

import Summary from './Summary'

describe('Summary', () => {
  test("displays user's score", () => {
    render(<Summary score={9} totalQuestions={10} />)

    const score = screen.getByText(/9 out of 10/i)
    expect(score).toBeInTheDocument()
  })

  test('if score is 5 or less, displays a fail gif', () => {
    render(<Summary score={5} totalQuestions={10} />)

    const sadFace = screen.getByAltText(/fail/i)
    expect(sadFace).toBeInTheDocument()
  })

  test('if score is 6 or more, displays a pass gif', () => {
    render(<Summary score={6} totalQuestions={10} />)

    const happyFace = screen.getByAltText(/pass/i)
    expect(happyFace).toBeInTheDocument()
  })
})
