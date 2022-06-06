import { render, screen } from '@testing-library/react'
import ProgressBar from './ProgressBar'

describe('ProgressBar', () => {
  test('displays correct quiz progression', () => {
    render(<ProgressBar progression={0.5} />)

    const progressBar = screen.getByTestId('progress-bar')
    expect(progressBar).toHaveStyle({ width: '50%' })
  })
})
