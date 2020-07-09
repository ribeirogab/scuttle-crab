import { HooksRepository } from '../../interfaces/Hooks';

import find from './find';

export default function contracts(): HooksRepository {
  return { find };
}
