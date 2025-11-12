import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@/App'

describe('App integration', () => {
  it('renders the navigation brand', () => {
    render(<App />)
    // Navigation contains the brand text AlgoViz (may appear multiple times)
    const matches = screen.getAllByText(/AlgoViz/i)
    expect(matches.length).toBeGreaterThan(0)
  })
})
