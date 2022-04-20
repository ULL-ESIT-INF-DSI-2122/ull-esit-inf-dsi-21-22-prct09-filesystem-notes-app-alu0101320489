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

