import { ChampionFlashcardsRepository } from '../../interfaces/ChampionFlashcards';

import find from './find';

export default function championFlashcards(): ChampionFlashcardsRepository {
  return { find };
}
