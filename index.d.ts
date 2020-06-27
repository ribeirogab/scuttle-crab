import { ChampionsRepository } from './lib/interfaces/Champion';

declare module 'scuttle-crab' {
  export function champions(): ChampionsRepository;
}
