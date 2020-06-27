import { CurrentLeague, FindRequest } from '../../interfaces/CurrentLeague';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  order_by,
  fields,
  limit,
}: FindRequest = {}): Promise<CurrentLeague[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'CurrentLeagues',
    fields: fieldsToBeUsed,
    order_by,
    limit,
  });

  const { data: currentLeagues } = await apiService.get(endPoint);

  return currentLeagues;
}
