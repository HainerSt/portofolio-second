// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const theme = "dark";

Sentry.init({
  dsn: "https://93963c9c767c75c637c91a3c19f04022@o4508278320791552.ingest.de.sentry.io/4508278325575760",

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),

    Sentry.feedbackIntegration({
      colorScheme: { theme },
    }),
  ],
  tracesSampleRate: 1,

  replaysSessionSampleRate: 0.1,

  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
