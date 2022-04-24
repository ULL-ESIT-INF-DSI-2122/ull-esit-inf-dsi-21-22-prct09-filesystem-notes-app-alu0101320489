import { TM } from './map';
export declare class AddMapReduce extends TM {
    constructor();
    /**
     * Aplica un reduce sumando
     * @param acc acumulador
     * @param arr array
     */
    reduce(acc: number, arr: number[]): number;
    hook(): void;
}
