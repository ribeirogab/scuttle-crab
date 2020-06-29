# Feature: Champions

## Find

**Parameters**:

- **fields (default all)**
- **where (default none)**
- **order_by (default first field ASC)**
- **limit (default 100)**

### Example 1

> No parameters

```js
const { champions } = require('scuttle-crab');

async function main() {
  const championsRepository = champions();

  const allChampions = await championsRepository.find({});

  console.log(allChampions);
}

main();
```

---

### Example 2

> All parameters

```js
const { champions } = require('scuttle-crab');

async function main() {
  const championsRepository = champions();

  const someChampions = await championsRepository.find({
    fields: [{ name: 'Name' }, { name: 'Title' }],
    where: {
      $AND: {
        $LIKE: { Name: 'Aa' },
      }
      $OR: { Name: 'Kalista' }
    },
    order_by: {
      field: 'Name',
      order: 'ASC',
    },
    limit: 10,
  });

  console.log(someChampions);
}

main();
```

---
