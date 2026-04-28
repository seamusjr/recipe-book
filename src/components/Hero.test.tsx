import { render, screen } from '@testing-library/react'
import Hero from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero component', () => {
  it('renders the hero title and description', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Hero')
  })

  it('renders the hero message', () => {
    render(<Hero />)

    const message = screen.getByText(/Lorem ipsum dolor sit amet/i)
    expect(message).toBeInTheDocument()
  })
})
