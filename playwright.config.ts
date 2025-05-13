import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/e2e',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: 'list',
  use: {
    browserName: 'chromium',
    headless: true,
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
});