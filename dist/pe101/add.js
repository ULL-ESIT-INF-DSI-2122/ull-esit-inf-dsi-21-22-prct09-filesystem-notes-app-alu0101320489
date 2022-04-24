"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMapReduce = void 0;
const map_1 = require("./map");
class AddMapReduce extends map_1.TM {
    constructor() { super(); }
    /**
     * Aplica un reduce sumando
     * @param acc acumulador
     * @param arr array
     */
    reduce(acc, arr) {
        arr.forEach((item) => acc = acc + item);
        return acc;
    }
    hook() {
        console.log('Add');
    }
}
exports.AddMapReduce = AddMapReduce;
