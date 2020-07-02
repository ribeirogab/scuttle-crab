import { MatchScheduleRepository } from '../../interfaces/MatchSchedule';

import find from './find';

export default function matchSchedule(): MatchScheduleRepository {
  return { find };
}
