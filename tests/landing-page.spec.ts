import { test, expect } from '@playwright/test'

test.describe('Arnie AI Revolution – Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Wait for page to be fully hydrated
    await page.waitForLoadState('networkidle')
  })

  test('B2B Qualification: €4M revenue qualifier is visible', async ({ page }) => {
    const body = await page.textContent('body')
    const hasQualifier = body?.includes('€4M') || body?.includes('€4 million')
    expect(hasQualifier).toBe(true)
  })

  test('Community Funnel: Skool CTA has correct URL and target="_blank"', async ({ page }) => {
    const skoolLink = page.locator('a[href="https://www.skool.com/ai-mit-arnie-ki-revolution/about"]').first()
    await expect(skoolLink).toBeAttached()
    await expect(skoolLink).toHaveAttribute('target', '_blank')
  })

  test('Lead Capture: Consultation button links to mailto:arnio93@gmail.com', async ({ page }) => {
    const mailtoLink = page.locator('a[href="mailto:arnio93@gmail.com"]').first()
    await expect(mailtoLink).toBeAttached()
    await expect(mailtoLink).toHaveAttribute('href', 'mailto:arnio93@gmail.com')
  })

  test('YouTube Integration: Arnold-Oberleiter YouTube link is present', async ({ page }) => {
    const ytLink = page.locator('a[href="https://www.youtube.com/@Arnold-Oberleiter"]').first()
    await expect(ytLink).toBeAttached()
    await expect(ytLink).toHaveAttribute('href', 'https://www.youtube.com/@Arnold-Oberleiter')
  })

  test('Video Animation: video element has muted and playsinline attributes', async ({ page }) => {
    const video = page.locator('video').first()
    await expect(video).toBeAttached()

    // Scroll video into view to trigger lazy load / reveal
    await video.scrollIntoViewIfNeeded()
    await page.waitForTimeout(600)

    const isMuted = await video.evaluate((el) => (el as HTMLVideoElement).muted)
    expect(isMuted).toBe(true)

    const hasPlaysinline = await video.evaluate((el) =>
      el.hasAttribute('playsinline')
    )
    expect(hasPlaysinline).toBe(true)
  })
})
