import { Champion, FindRequest } from '../../interfaces/Champions';
import { Where } from '../../interfaces/WHERE';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  fields,
  where,
  order_by,
  limit,
}: FindRequest = {}): Promise<Champion[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'Champions',
    fields: fieldsToBeUsed,
    where: where as Where,
    order_by,
    limit,
  });

  const { data: champions } = await apiService.get(endPoint);

  return champions;
}
