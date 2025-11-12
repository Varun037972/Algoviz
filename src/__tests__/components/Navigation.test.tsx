import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navigation } from '@/components/Navigation'
import { BrowserRouter } from 'react-router-dom'

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Navigation component', () => {
  it('renders the brand logo with text', () => {
    renderWithRouter(<Navigation />)
    expect(screen.getByText('AlgoViz')).toBeInTheDocument()
  })

  it('displays home link', () => {
    renderWithRouter(<Navigation />)
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThan(0)
  })

  it('renders navigation menu', () => {
    renderWithRouter(<Navigation />)
    const navs = screen.getAllByRole('navigation')
    expect(navs.length).toBeGreaterThan(0)
  })

  it('displays algorithm categories trigger', () => {
    renderWithRouter(<Navigation />)
    expect(screen.getByText('Algorithms')).toBeInTheDocument()
  })

  it('displays demo link', () => {
    renderWithRouter(<Navigation />)
    expect(screen.getByText('Demo')).toBeInTheDocument()
  })

  it('displays docs link', () => {
    renderWithRouter(<Navigation />)
    expect(screen.getByText('Docs')).toBeInTheDocument()
  })

  it('displays login button', () => {
    renderWithRouter(<Navigation />)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})
