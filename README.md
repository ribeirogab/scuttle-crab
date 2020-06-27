<h1 align="center">
<img src="https://raw.githubusercontent.com/ribeirogab/scuttle-crab/master/examples/logo.png" alt="scuttle-crab" width="200"/>
</h1>

# Scuttle Crab
> A wrapper for the LOL Gamepedia REST API.

For more information, please refer to [API documentation](https://lol.gamepedia.com/Help:API_Documentation).

## Getting Started 

### Installation

if you use npm
```
$ npm install scuttle-crap
```

if you use yarn
```
$ yarn add scuttle-crap
```

### Example 1

> Feature: champions > find
```js
const { champions } = require('scuttle-crap');

async function main() {
  const championsRepository = champions();
  
  const allChampions = await championsRepository.find({});
  
  console.log(allChampions);
}

main(); 
```

### Example 2

> Feature: champions > find
```js
const { champions } = require('scuttle-crap');

async function main() {
  const championsRepository = champions();
  
  const NameOfTeenChampions = await championsRepository.find({ 
     order_by: { field: { name: 'Name' }, order: 'DESC' }, // order by name
     fields: [{ name: 'Name' }], // only field name
     limit: 10,
  });
  
  console.log(NameOfTeenChampions);
}

main(); 
```



## Features
- Champions:
  - Find;
- Current Leagues:
  - Find;

---

## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴  Fork this repo!

- **Option 2**
    - 👯  Clone this repo to your local machine using `git clone https://github.com/ribeirogab/scuttle-crab.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃  Create a new pull request using <a href="https://github.com/ribeirogab/scuttle-crab/compare/" target="_blank">`https://github.com/ribeirogab/scuttle-crab/compare/`</a>.

---

## Contributors

| <img width="115"> | <img width="115"> | <img width="115"> | <img width="115"> | <img width="115"> | <img width="115"> |
|:-:|:-:|:-:|:-:|:-:|:-:| 

## Author

| [<img src="https://avatars3.githubusercontent.com/u/44847326?s=400&u=30a156f0a61f81eaa137cb286ed13e9527916039&v=4" width="115"><br><sub>@ribeirogab</sub>](https://github.com/ribeirogab) |
| :---: |

---

## FAQ

- **How do I do *specifically* so and so?**
    - No problem! Just do this.
    
---

## Support

Contact me!

- E-mail <a href="mailto:ribeirogabx@gmail.com" target="_blank">`ribeirogabx@gmail.com`</a>

---

## Licensa

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
