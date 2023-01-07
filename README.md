# Cookie Package

> A tiny and secure cookie package for JavaScript.

You can set and access the cookies in hole website !

- Install

```bash
npm i xck
```

- import

```javascript
import { setCk, getCk, removeCk } from xck;
```

- set Cookie

```javascript
setCk("cookie-name", "myCookie");
```

- get Cookie

```javascript
const cookie = getCk("cookie-name");

console.log(cookie); //myCookie
```

- remove Cookie

```javascript
removeCk("cookie-name");
```
