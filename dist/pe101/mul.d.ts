import { TM } from './map';
export declare class MulMapReduce extends TM {
    constructor();
    /**
     * Aplica reduce multiplicando
     * @param acc acumulador
     * @param arr array
     */
    reduce(acc: number, arr: number[]): number;
    hook(): void;
}
