"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TM = void 0;
/**
 * Clase que implemeta un metodo template
 */
class TM {
    constructor() { }
    /**Metodo plantilla */
    run(arr) {
        let ret = [];
        ret = this.map(arr, this.reduce);
        this.hook();
        return ret;
    }
    /**
     * Metodo map general
     * @param arr array
     * @param Func funcion del metodo map
     */
    map(arr, Func) {
        let ret = [];
        arr.forEach((item, i) => ret.push(Func(i, arr)));
        return ret;
    }
}
exports.TM = TM;
