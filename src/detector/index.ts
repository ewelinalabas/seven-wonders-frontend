import { reduceDetectors } from 'redux-detector';
import { teamDetector } from 'detector/teamDetector';

export const appDetector = reduceDetectors(
  teamDetector
);
