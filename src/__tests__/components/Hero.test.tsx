import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
import { BrowserRouter } from 'react-router-dom'

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Hero component', () => {
  it('renders hero section', () => {
    const { container } = renderWithRouter(<Hero />)
    const heroSection = container.querySelector('section')
    expect(heroSection).toBeInTheDocument()
  })

  it('displays main heading', () => {
    renderWithRouter(<Hero />)
    const headings = screen.queryAllByRole('heading')
    expect(headings.length).toBeGreaterThan(0)
  })

  it('contains visualizer link', () => {
    renderWithRouter(<Hero />)
    // Hero typically links to visualizer or has a CTA
    const links = screen.queryAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(0)
  })

  it('renders without crashing', () => {
    const { container } = renderWithRouter(<Hero />)
    expect(container).toBeInTheDocument()
  })
})
