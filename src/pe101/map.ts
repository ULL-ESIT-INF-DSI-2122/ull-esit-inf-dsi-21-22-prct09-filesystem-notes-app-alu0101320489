/**
 * Clase que implemeta un metodo template
 */
export abstract class TM {
    constructor() {}
    /**Metodo plantilla */
    public run(arr: number[]):number[] {
        let ret: number[] = [];
        ret = this.map(arr, this.reduce);
        this.hook();
        return ret;
    }
    /**
     * Metodo map general
     * @param arr array
     * @param Func funcion del metodo map
     */
    public map(arr: number[],  Func: any): number[] {
        let ret: number[] = [];
        arr.forEach((item,i) => ret.push(Func(i, arr)));
        return ret;
    }
    /**
     * Metodo abstracto reduce
     * @param n valor
     * @param arr array
     */
    protected abstract reduce(n: number, arr: number[]):number;
    /**
     * Metodo hook
     */
    protected abstract hook():void;
}


