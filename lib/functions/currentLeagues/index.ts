import { CurrentLeaguesRepository } from '../../interfaces/CurrentLeagues';

import find from './find';

export default function currentLeagues(): CurrentLeaguesRepository {
  return { find };
}
