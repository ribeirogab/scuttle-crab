import { ChampionsRepository } from './lib/interfaces/Champion';
import { CurrentLeaguesRepository } from './lib/interfaces/CurrentLeague';

declare module 'scuttle-crab' {
  export function champions(): ChampionsRepository;
  export function currentLeague(): CurrentLeaguesRepository;
}
