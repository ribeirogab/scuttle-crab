import { ChromaSet, FindRequest } from '../../interfaces/ChromaSets';
import { Where } from '../../interfaces/WHERE';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  fields,
  where,
  order_by,
  limit,
}: FindRequest = {}): Promise<ChromaSet[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'ChromaSets',
    fields: fieldsToBeUsed as string[],
    where: where as Where,
    order_by,
    limit,
  });

  const { data: chromaSets } = await apiService.get(endPoint);

  return chromaSets;
}
