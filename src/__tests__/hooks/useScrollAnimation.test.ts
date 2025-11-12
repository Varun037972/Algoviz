import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

describe('useScrollAnimation hook', () => {
  it('initializes without crashing', () => {
    const { result } = renderHook(() => useScrollAnimation({ threshold: 0.5 }))
    expect(result).toBeDefined()
  })

  it('accepts options parameter', () => {
    const { result } = renderHook(() => useScrollAnimation({ threshold: 0.3 }))
    expect(result).toBeDefined()
  })

  it('returns a ref for the element', () => {
    const { result } = renderHook(() => useScrollAnimation({ threshold: 0.5 }))
    expect(result.current).toBeDefined()
  })
})
