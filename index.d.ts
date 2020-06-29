import { ChampionsRepository } from './lib/interfaces/Champion';
import { CurrentLeaguesRepository } from './lib/interfaces/CurrentLeague';
import { ChampionFlashcardsRepository } from './lib/interfaces/ChampionFlashcard';

declare module 'scuttle-crab' {
  export function champions(): ChampionsRepository;
  export function championFlashcards(): ChampionFlashcardsRepository;
  export function currentLeague(): CurrentLeaguesRepository;
}
