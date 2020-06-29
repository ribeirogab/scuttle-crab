import { Chroma, FindRequest } from '../../interfaces/Chromas';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  order_by,
  fields,
  limit,
}: FindRequest = {}): Promise<Chroma[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'Chromas',
    fields: fieldsToBeUsed,
    order_by,
    limit,
  });

  const { data: chromas } = await apiService.get(endPoint);

  return chromas;
}
