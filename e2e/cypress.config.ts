import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run wayzello:serve',
        production: 'nx run wayzello:preview',
      },
      ciWebServerCommand: 'nx run wayzello:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
