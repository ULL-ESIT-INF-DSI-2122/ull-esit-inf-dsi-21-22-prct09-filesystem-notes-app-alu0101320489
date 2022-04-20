/**
 * Clase que implemeta un metodo template
 */
export abstract class TM {
    constructor() {}
    /**Metodo plantilla */
    public run(arr: number[]):number[] {
        return this.map(arr, this.reduce);
    }
    /**
     * Metodo map general
     * @param arr array
     * @param Func funcion del metodo map
     */
    protected map(arr: number[],  Func: any): number[] {
        let ret: number[] = [];
        arr.forEach((item,i) => ret.push(Func(i, arr)));
        return ret;
    }
    /**
     * Metodo abastratco
     * @param n valor
     * @param arr array
     */
    protected abstract reduce(n: number, arr: number[]):number;
}


