import { Config } from '@stencil/core';
import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'true-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  plugins: [
    sass()
  ],
  globalStyle: 'src/styles/main.scss',
};
