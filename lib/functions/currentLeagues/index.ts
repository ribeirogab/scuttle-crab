import { CurrentLeaguesRepository } from '../../interfaces/CurrentLeague';

import find from './find';

export default function currentLeagues(): CurrentLeaguesRepository {
  return { find };
}
