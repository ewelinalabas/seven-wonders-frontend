import { mountDetector, reduceDetectors } from 'redux-detector';
import { selectHasMatch } from 'selector/routeSelector';
import { AppRoute } from 'app/route';
import { changedPositive } from 'detector/changedDetector';
import { fetchTeams } from 'action/teamAction';

export const teamDetector = reduceDetectors(
  mountDetector(selectHasMatch(AppRoute.HOME), changedPositive(() => fetchTeams()))
);
