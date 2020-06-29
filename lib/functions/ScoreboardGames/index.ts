import { ScoreboardGamesRepository } from '../../interfaces/ScoreboardGames';

import find from './find';

export default function champions(): ScoreboardGamesRepository {
  return { find };
}
