"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulMapReduce = void 0;
const map_1 = require("./map");
class MulMapReduce extends map_1.TM {
    constructor() { super(); }
    /**
     * Aplica reduce multiplicando
     * @param acc acumulador
     * @param arr array
     */
    reduce(acc, arr) {
        arr.forEach((item) => acc = acc * item);
        return acc;
    }
    hook() {
        console.log('Mul');
    }
}
exports.MulMapReduce = MulMapReduce;
