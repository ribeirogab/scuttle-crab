import { Disambiguation, FindRequest } from '../../interfaces/Disambiguations';
import { Where } from '../../interfaces/WHERE';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  fields,
  where,
  order_by,
  limit,
}: FindRequest = {}): Promise<Disambiguation[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'Disambiguations',
    fields: fieldsToBeUsed as string[],
    where: where as Where,
    order_by,
    limit,
  });

  const { data: disambiguations } = await apiService.get(endPoint);

  return disambiguations;
}
