import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

describe('Card component', () => {
  it('renders card', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>Test content</CardContent>
      </Card>,
    )
    expect(screen.getByText('Test Card')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders card with description', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description text</CardDescription>
        </CardHeader>
      </Card>,
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description text')).toBeInTheDocument()
  })

  it('renders card content', () => {
    render(
      <Card>
        <CardContent>
          <p>Paragraph in card</p>
        </CardContent>
      </Card>,
    )
    expect(screen.getByText('Paragraph in card')).toBeInTheDocument()
  })
})
