import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run infinity-bug:serve',
        production: 'nx run infinity-bug:preview',
      },
      ciWebServerCommand: 'nx run infinity-bug:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
