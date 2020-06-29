import {
  ChampionFlashcard,
  FindRequest,
} from '../../interfaces/ChampionFlashcards';
import { Where } from '../../interfaces/WHERE';

import getEndPointService from '../../services/getEndPointService';
import apiService from '../../services/apiService';

import defaultFields from './utils/defaultFields';

export default async function find({
  fields,
  where,
  order_by,
  limit,
}: FindRequest = {}): Promise<ChampionFlashcard[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const endPoint = getEndPointService({
    type: 'ChampionFlashcards',
    fields: fieldsToBeUsed,
    where: where as Where,
    order_by,
    limit,
  });

  const { data: championFlashcards } = await apiService.get(endPoint);

  return championFlashcards;
}
