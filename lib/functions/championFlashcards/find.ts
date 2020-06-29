import {
  ChampionFlashcard,
  FindRequest,
} from '../../interfaces/ChampionFlashcard';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  order_by,
  fields,
  limit,
}: FindRequest = {}): Promise<ChampionFlashcard[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'ChampionFlashcards',
    fields: fieldsToBeUsed,
    order_by,
    limit,
  });

  const { data: championFlashcard } = await apiService.get(endPoint);

  return championFlashcard;
}
