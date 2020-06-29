import { PlayersRepository } from '../../interfaces/Players';

import find from './find';

export default function champions(): PlayersRepository {
  return { find };
}
