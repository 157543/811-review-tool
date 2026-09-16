import { defineConfig, devices } from '@playwright/test';

const browserChannel=process.platform==='win32'?'msedge':undefined;

export default defineConfig({
  testDir:'./tests/production',
  fullyParallel:false,
  workers:1,
  reporter:[['list']],
  use:{baseURL:'http://127.0.0.1:4174',trace:'retain-on-failure'},
  projects:[{name:'production-chromium',use:{...devices['Desktop Chrome'],channel:browserChannel}}],
  webServer:{
    command:'node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4174',
    url:'http://127.0.0.1:4174',
    reuseExistingServer:true,
  },
});
