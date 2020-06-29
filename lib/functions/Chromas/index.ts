import { ChromasRepository } from '../../interfaces/Chromas';

import find from './find';

export default function champions(): ChromasRepository {
  return { find };
}
