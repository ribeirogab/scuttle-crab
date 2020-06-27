import { ChampionsRepository } from '../../interfaces/Champion';

import find from './find';

export default function champions(): ChampionsRepository {
  return { find };
}
