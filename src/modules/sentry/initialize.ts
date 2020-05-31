import * as Sentry from '@sentry/browser';
import sentryConfig from './config'

export const sentryInitialize = () => {
  Sentry.init(sentryConfig);
}
