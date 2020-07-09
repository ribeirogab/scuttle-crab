import { DisambiguationsRepository } from '../../interfaces/Disambiguations';

import find from './find';

export default function contracts(): DisambiguationsRepository {
  return { find };
}
