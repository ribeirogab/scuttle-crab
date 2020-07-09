import { ExternalContentRepository } from '../../interfaces/ExternalContent';

import find from './find';

export default function contracts(): ExternalContentRepository {
  return { find };
}
