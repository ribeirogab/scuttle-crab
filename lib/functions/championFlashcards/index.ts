import { ChampionFlashcardsRepository } from '../../interfaces/ChampionFlashcard';

import find from './find';

export default function championFlashcards(): ChampionFlashcardsRepository {
  return { find };
}
