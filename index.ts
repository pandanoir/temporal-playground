import { Temporal } from 'https://cdn.skypack.dev/@js-temporal/polyfill?dts';

console.log(Temporal.Instant.from('2022-09-17T00:00Z').toString());
console.log(Temporal.Instant.from('2022-09-25T00:00Z').toString());
