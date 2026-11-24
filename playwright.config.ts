import { defineConfig, devices } from '@playwright/test';

const PORT = 4173;

// Use a browser that's already installed (e.g. a CI image with a different Playwright version).
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined;

/**
 * Browser tests run against a production build (`vite build` + `vite preview`), so they cover
 * server rendering and real navigation. See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: process.env.CI ? 'github' : 'list',
	use: {
		baseURL: `http://localhost:${PORT}`,
		trace: 'on-first-retry',
		launchOptions: { executablePath }
	},

	projects: [
		{
			name: 'desktop',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			// Phone layout: bottom sheet, touch input. Pixel 7 runs on Chromium.
			name: 'phone',
			use: { ...devices['Pixel 7'] }
		}
	],

	webServer: {
		command: `npm run build && npm run preview -- --port ${PORT} --strictPort`,
		url: `http://localhost:${PORT}`,
		reuseExistingServer: !process.env.CI,
		timeout: 180_000
	}
});
