import { mountDetector, reduceDetectors } from 'redux-detector';
import { selectHasExactMatch } from 'selector/routeSelector';
import { AppRoute } from 'app/route';
import { changedPositive } from 'detector/changedDetector';
import { fetchTeams } from 'action/teamAction';

export const teamDetector = reduceDetectors(
  mountDetector(selectHasExactMatch(AppRoute.HOME), changedPositive(() => fetchTeams()))
);
