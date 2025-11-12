import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn utility function', () => {
  it('combines class names correctly', () => {
    const result = cn('px-2', 'py-1')
    expect(result).toBe('px-2 py-1')
  })

  it('merges tailwind classes without duplication', () => {
    const result = cn('px-2 py-1', 'px-4')
    expect(result).toContain('px-4')
  })

  it('handles conditional classes', () => {
    const isActive = true
    const isDisabled = false
    const result = cn('px-2', isDisabled && 'py-1', isActive && 'text-primary')
    expect(result).toContain('px-2')
    expect(result).toContain('text-primary')
  })

  it('handles undefined and null values', () => {
    const result = cn('px-2', undefined, null, 'py-1')
    expect(result).toBe('px-2 py-1')
  })

  it('handles array of classes', () => {
    const result = cn(['px-2', 'py-1'], 'text-sm')
    expect(result).toContain('px-2')
    expect(result).toContain('py-1')
    expect(result).toContain('text-sm')
  })
})
