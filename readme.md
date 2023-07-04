<h1 align="center" style="border-bottom: none;">🍕chunki</h1>
<h3 align="center">chunki exposes two methods; one for splitting array into chunks based on size and another for combining them together.</h3>

---

### **chunki** has **two utility** functions:

- One to split an array into smaller chunks.
- Another to combine chunks into a single array.

### Chunk Method

```javascript
const { chunk } = require("chunki");

// If you are using es6 import feature
//import { chunk } = from "chunki";

const arr = [1, 2, 3, 4, 5, 6];
const chunks = chunk(arr, 2); // 2 --> chunk size
console.log(chunks); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

//Splitting objects into chunks
const arr = [{ name: "john" }, { name: "Patlu" }];
const chunks = chunk(arr, 1);
console.log(chunks); //[ [ { name: 'john' } ], [ { name: 'Patlu' } ] ]
```

### Flatten Method

```javascript
const { flatten } = require("chunki");

// If you are using es6 import feature
//import {  flatten } = from "chunki";
const chunks = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenArr = flatten(chunks);
console.log(flattenArr); //[ 1, 2, 3, 4, 5, 6 ]
```
