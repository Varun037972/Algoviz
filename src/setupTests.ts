import '@testing-library/jest-dom'

// jsdom doesn't implement some browser APIs used by the app; provide lightweight mocks here.
if (typeof (globalThis as Record<string, unknown>).matchMedia !== 'function') {
  Object.defineProperty(globalThis, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }),
  })
}

// IntersectionObserver mock
if (typeof (globalThis as Record<string, unknown>).IntersectionObserver === 'undefined') {
  (globalThis as Record<string, unknown>).IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  }
}

// Canvas getContext stub to avoid "Not implemented" errors from libraries using canvas
if (typeof HTMLCanvasElement !== 'undefined' && !HTMLCanvasElement.prototype.getContext) {
  // @ts-expect-error Canvas getContext not implemented in jsdom
  HTMLCanvasElement.prototype.getContext = function () {
    return null
  }
}