"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubMapReduce = void 0;
const map_1 = require("./map");
class SubMapReduce extends map_1.TM {
    constructor() { super(); }
    /**
     * Aplica un reduce restando
     * @param acc acumulador
     * @param arr array
     */
    reduce(acc, arr) {
        arr.forEach((item) => acc = acc - item);
        return acc;
    }
    hook() {
        console.log('Sub');
    }
}
exports.SubMapReduce = SubMapReduce;
