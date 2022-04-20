import {TM} from './map'
export class AddMapReduce extends TM {
    constructor() {super()}
    /**
     * Aplica un reduce sumando
     * @param acc acumulador
     * @param arr array
     */
    reduce(acc: number, arr: number[]):number {
        arr.forEach((item) => acc = acc +item);
        return acc;
    }
}