import { Where } from '../interfaces/WHERE';

import generateWhereString from '../utils/generateWhereString';

interface Field {
  name: string;
}

interface Request {
  type: string;
  fields: Field[];
  order_by:
    | {
        field: Field;
        order: 'ASC' | 'DESC';
      }
    | undefined;
  limit: number | undefined;
  where: Where;
}

function getEndPointService({
  type,
  fields,
  order_by,
  limit,
  where,
}: Request): string {
  const fieldsValue = fields.map(field => `${type}.${field.name}`).join('%2C+');

  const whereValue = generateWhereString(where, type);

  const orderByValue = order_by
    ? `%60cargo__${type}%60.%60${order_by.field}%60+${order_by.order}`
    : '';

  const url = `&tables=${type}&fields=${fieldsValue}&where=${whereValue}&order+by=${orderByValue}&limit=${
    limit || 100
  }&format=json`;

  return url;
}

export default getEndPointService;
