import { ChromaSet, FindRequest } from '../../interfaces/ChromaSets';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  order_by,
  fields,
  limit,
}: FindRequest = {}): Promise<ChromaSet[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'ChromaSets',
    fields: fieldsToBeUsed,
    order_by,
    limit,
  });

  const { data: chromaSets } = await apiService.get(endPoint);

  return chromaSets;
}
