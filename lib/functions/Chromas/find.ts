import { Chroma, FindRequest } from '../../interfaces/Chromas';
import { Where } from '../../interfaces/WHERE';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  fields,
  where,
  order_by,
  limit,
}: FindRequest = {}): Promise<Chroma[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'Chromas',
    fields: fieldsToBeUsed,
    where: where as Where,
    order_by,
    limit,
  });

  const { data: chromas } = await apiService.get(endPoint);

  return chromas;
}
