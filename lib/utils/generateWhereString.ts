import { Where } from '../interfaces/WHERE';

export default function generateWhereString(
  where: Where,
  type: string,
): string {
  let whereString = '';
  if (where) {
    if (where.$AND || where.$OR) {
      const andValues = where.$AND
        ? where.$AND
            .map(and =>
              Object.keys(and)
                .map(query => {
                  if (query === '$LIKE') {
                    return Object.keys(and[query] || {}).map(
                      field =>
                        and.$LIKE &&
                        `${type.split('.')[0]}.${field}+LIKE+%27%25${
                          and.$LIKE[field]
                        }%25%27+and+`,
                    );
                  }
                  return '';
                })
                .join(''),
            )
            .join('')
        : '';

      const orValues = where.$OR
        ? where.$OR
            .map(or =>
              Object.keys(or)
                .map(query => {
                  if (query === '$LIKE') {
                    return Object.keys(or[query] || {}).map(
                      field =>
                        or.$LIKE &&
                        `+or+${type.split('.')[0]}.${field}+LIKE+%27%25${
                          or.$LIKE[field]
                        }%25%27`,
                    );
                  }
                  return '';
                })
                .join(''),
            )
            .join('')
        : '';

      whereString = `${andValues.substr(0, andValues.length - 5)}${orValues}`;
    } else if (where.$LIKE) {
      const likeValues = Object.keys(where.$LIKE)
        .map(
          field =>
            where.$LIKE &&
            `${type.split('.')[0]}.${field}+LIKE+%27%25${
              where.$LIKE[field]
            }%25%27+and+`,
        )
        .join('');

      whereString = likeValues.substr(0, likeValues.length - 5);
    }
  }

  return whereString;
}
