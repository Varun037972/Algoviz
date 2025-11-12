import '@testing-library/jest-dom'

// jsdom doesn't implement some browser APIs used by the app; provide lightweight mocks here.
if (typeof (window as any).matchMedia !== 'function') {
	Object.defineProperty(window, 'matchMedia', {
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
if (typeof (global as any).IntersectionObserver === 'undefined') {
	(global as any).IntersectionObserver = class {
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
	// @ts-ignore
	HTMLCanvasElement.prototype.getContext = function () {
		return null
	}
}
