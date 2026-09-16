import { defineConfig, devices } from '@playwright/test';

const browserChannel=process.platform==='win32' ? 'msedge' : undefined;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  workers: 2,
  reporter: [['list']],
  use: { baseURL: 'http://127.0.0.1:4173', trace: 'retain-on-failure' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'], channel: browserChannel } },
    { name: 'iphone', use: { ...devices['iPhone 13'], browserName: 'chromium', channel: browserChannel } },
    { name: 'ipad', use: { ...devices['iPad Mini'], browserName: 'chromium', channel: browserChannel } },
  ],
  webServer: {
    command: 'node node_modules/vite/bin/vite.js --mode test --host 127.0.0.1 --port 4173',
    url: 'http://127.0.0.1:4173', reuseExistingServer: !process.env.CI,
  },
});
