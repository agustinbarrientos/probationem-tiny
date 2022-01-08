# @probationem/tiny

![npm](https://img.shields.io/npm/v/@probationem/tiny) ![npm bundle size](https://img.shields.io/bundlephobia/min/agustinbarrientos/probationem-tiny)

Removes all spaces from a string.

# Install
```
$ npm install @probationem/tiny
```

# Usage
```js
const tiny = require("@probationem/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny expects a string
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
