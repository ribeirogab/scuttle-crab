import { CurrentLeague, FindRequest } from '../../interfaces/CurrentLeagues';
import { Where } from '../../interfaces/WHERE';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  fields,
  where,
  order_by,
  limit,
}: FindRequest = {}): Promise<CurrentLeague[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'CurrentLeagues',
    fields: fieldsToBeUsed,
    where: where as Where,
    order_by,
    limit,
  });

  const { data: currentLeagues } = await apiService.get(endPoint);

  return currentLeagues;
}
