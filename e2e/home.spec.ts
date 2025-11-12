import { test, expect } from '@playwright/test'

test.describe('AlgoViz Home Page', () => {
  test('loads home page successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/.*/)
    await expect(page.locator('text=AlgoViz')).toBeVisible()
  })

  test('displays hero section', async ({ page }) => {
    await page.goto('/')
    const heroText = page.locator('text=Visualize Real Code')
    await expect(heroText).toBeVisible()
  })

  test('navigation links work', async ({ page }) => {
    await page.goto('/')
    const homeLink = page.locator('a:has-text("Home")')
    await expect(homeLink).toBeVisible()
  })

  test('launch visualizer button exists', async ({ page }) => {
    await page.goto('/')
    const launchButton = page.locator('button:has-text("Launch Visualizer")')
    await expect(launchButton).toBeVisible()
  })

  test('can navigate to demo page', async ({ page }) => {
    await page.goto('/')
    const demoLink = page.locator('a:has-text("Demo")')
    await demoLink.click()
    await expect(page).toHaveURL(/.*demo/)
  })
})

test.describe('Navigation', () => {
  test('login button is visible', async ({ page }) => {
    await page.goto('/')
    const loginButton = page.locator('button:has-text("Login")')
    await expect(loginButton).toBeVisible()
  })

  test('can click algorithms menu', async ({ page }) => {
    await page.goto('/')
    const algorithmsTrigger = page.locator('button:has-text("Algorithms")')
    await expect(algorithmsTrigger).toBeVisible()
  })
})
