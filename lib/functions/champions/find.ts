import { Champion, FindRequest } from '../../interfaces/Champions';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  order_by,
  fields,
  limit,
}: FindRequest = {}): Promise<Champion[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'Champions',
    fields: fieldsToBeUsed,
    order_by,
    limit,
  });

  const { data: champions } = await apiService.get(endPoint);

  return champions;
}
