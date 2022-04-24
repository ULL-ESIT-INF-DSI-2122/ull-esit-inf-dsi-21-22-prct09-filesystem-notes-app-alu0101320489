/**
 * Clase que implemeta un metodo template
 */
export declare abstract class TM {
    constructor();
    /**Metodo plantilla */
    run(arr: number[]): number[];
    /**
     * Metodo map general
     * @param arr array
     * @param Func funcion del metodo map
     */
    map(arr: number[], Func: any): number[];
    /**
     * Metodo abstracto reduce
     * @param n valor
     * @param arr array
     */
    protected abstract reduce(n: number, arr: number[]): number;
    /**
     * Metodo hook
     */
    protected abstract hook(): void;
}
