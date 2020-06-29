import { ChampionsRepository } from '../../interfaces/Champions';

import find from './find';

export default function champions(): ChampionsRepository {
  return { find };
}
