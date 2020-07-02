import { MatchSchedule, FindRequest } from '../../interfaces/MatchSchedule';
import { Where } from '../../interfaces/WHERE';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  fields,
  where,
  order_by,
  limit,
}: FindRequest = {}): Promise<MatchSchedule[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'MatchSchedule',
    fields: fieldsToBeUsed as string[],
    where: where as Where,
    order_by,
    limit,
  });

  const { data: matchSchedule } = await apiService.get(endPoint);

  return matchSchedule;
}
