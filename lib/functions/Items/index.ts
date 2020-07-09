import { ItemsRepository } from '../../interfaces/Items';

import find from './find';

export default function contracts(): ItemsRepository {
  return { find };
}
