import { TM } from './map';
export declare class SubMapReduce extends TM {
    constructor();
    /**
     * Aplica un reduce restando
     * @param acc acumulador
     * @param arr array
     */
    reduce(acc: number, arr: number[]): number;
    hook(): void;
}
