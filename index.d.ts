import { ChampionsRepository } from './lib/interfaces/Champions';
import { ChampionFlashcardsRepository } from './lib/interfaces/ChampionFlashcards';
import { ChromaSetsRepository } from './lib/interfaces/ChromaSets';
import { ChromasRepository } from './lib/interfaces/Chromas';
import { CurrentLeaguesRepository } from './lib/interfaces/CurrentLeagues';

declare module 'scuttle-crab' {
  export function champions(): ChampionsRepository;
  export function championFlashcards(): ChampionFlashcardsRepository;
  export function chromaSets(): ChromaSetsRepository;
  export function chromas(): ChromasRepository;
  export function currentLeague(): CurrentLeaguesRepository;
}
