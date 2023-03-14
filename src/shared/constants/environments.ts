/**
 * * When you add a new environment, you must add it to the list below.
 * * - You must also add it to the list of environments in the .env file.
 */

import ENVIRONMENTS from '@env';

export const STAGES = {
  Dev: 'dev',
  Staging: 'staging',
  Prod: 'prod',
} as const;

export type StageType = typeof STAGES[keyof typeof STAGES];

export const STAGE = (ENVIRONMENTS.STAGE as StageType) || STAGES.Dev;
