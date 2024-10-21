/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'tido',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
      providers: {
        aws: {
          profile: 'personal',
        },
      },
    }
  },
  async run() {
    const databaseUrl = new sst.Secret('DatabaseUrl')
    new sst.aws.Nextjs('Tido', {
      link: [databaseUrl],
      server: {
        architecture: 'arm64',
      },
      environment: {
        DATABASE_URL: databaseUrl.value,
      },
    })
  },
})
