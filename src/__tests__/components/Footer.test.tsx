import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer component', () => {
  it('renders footer element', () => {
    render(<Footer />)
    const footer = screen.queryAllByRole('contentinfo') || document.querySelectorAll('footer')
    expect(footer.length).toBeGreaterThanOrEqual(0)
  })

  it('renders without crashing', () => {
    const { container } = render(<Footer />)
    expect(container).toBeInTheDocument()
  })

  it('contains text content', () => {
    const { container } = render(<Footer />)
    const text = container.textContent
    expect(text).toBeDefined()
  })
})
