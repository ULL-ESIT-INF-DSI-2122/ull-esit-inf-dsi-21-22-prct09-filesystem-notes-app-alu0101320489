import {TM} from './map'
export class SubMapReduce extends TM {
    constructor() {super()}
    /**
     * Aplica un reduce restando
     * @param acc acumulador
     * @param arr array
     */
    reduce(acc: number, arr: number[]):number {
        arr.forEach((item) => acc = acc - item);
        return acc;
    }
}