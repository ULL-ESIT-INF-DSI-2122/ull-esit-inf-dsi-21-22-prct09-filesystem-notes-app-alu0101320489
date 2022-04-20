import {TM} from './map'
export class MulMapReduce extends TM {
    constructor() {super()}
    /**
     * Aplica reduce multiplicando
     * @param acc acumulador
     * @param arr array
     */
    reduce(acc: number, arr: number[]):number {
        arr.forEach((item) => acc = acc * item);
        return acc;
    }
}