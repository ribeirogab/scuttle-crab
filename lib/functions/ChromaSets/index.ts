import { ChromaSetsRepository } from '../../interfaces/ChromaSets';

import find from './find';

export default function chromaSets(): ChromaSetsRepository {
  return { find };
}
