import { Where } from '../interfaces/WHERE';

export default function generateWhereString(
  where: Where,
  type: string,
): string {
  let whereString = '';
  if (where) {
    const andLikeValues =
      where.$AND && where.$AND.$LIKE
        ? Object.keys(where.$AND.$LIKE)
            .map(
              key =>
                where.$AND?.$LIKE &&
                `${type.split('.')[0]}.${key}+LIKE+%27%25${
                  where.$AND.$LIKE[key]
                }%25%27+and+`,
            )
            .join('')
        : '';

    const orLikeValues =
      where.$OR && where.$OR.$LIKE
        ? Object.keys(where.$OR.$LIKE)
            .map(
              key =>
                where.$OR?.$LIKE &&
                `+or+${type.split('.')[0]}.${key}+LIKE+%27${
                  where.$OR.$LIKE[key]
                }%27`,
            )
            .join('')
        : '';

    whereString = `${andLikeValues.substr(
      0,
      andLikeValues.length - 5,
    )}${orLikeValues}`;
  }

  return whereString;
}
