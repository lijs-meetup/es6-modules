// 1

import { a, b, c, d, e, f } from "./module.js";

console.log(a, b, c, d, e, f);

// 2

import * as letters from "./module.js";

console.log(letters.a, letters.b, letters.c, letters.d, letters.e, letters.f);

// 3

import { a as A, b as B } from "./module.js";

console.log(A, B);

// 4 default

import greet from "./module.js";
// rename
import { default as greetFn } from "./module.js";

greetFn();
