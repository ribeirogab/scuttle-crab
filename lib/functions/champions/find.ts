import api from '../../api';

import { Champion, Request } from '../../interfaces/Champion';

import defaultFields from './utils/defaultFields';

export default async function find({
  order_by,
  fields,
  limit,
}: Request = {}): Promise<Champion[]> {
  const fieldsToBeUsed = fields || defaultFields;

  const fieldsValue = fieldsToBeUsed
    .map(field => `Champions.${field.name}`)
    .join('%2C+');

  const orderByValue = order_by
    ? `%60cargo__Champions%60.%60${order_by.field}%60+${order_by.order}`
    : '';

  const { data: champions } = await api.get(
    `&table=Champions&fields=${fieldsValue}&order+by=${orderByValue}&limit=${
      limit || 100
    }&format=json`,
  );

  return champions;
}
