import { ExternalContent, FindRequest } from '../../interfaces/ExternalContent';
import { Where } from '../../interfaces/WHERE';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  fields,
  where,
  order_by,
  limit,
}: FindRequest = {}): Promise<ExternalContent[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'ExternalContent',
    fields: fieldsToBeUsed as string[],
    where: where as Where,
    order_by,
    limit,
  });

  const { data: externalContents } = await apiService.get(endPoint);

  return externalContents;
}
