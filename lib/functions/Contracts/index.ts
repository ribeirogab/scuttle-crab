import { ContractsRepository } from '../../interfaces/Contracts';

import find from './find';

export default function contracts(): ContractsRepository {
  return { find };
}
