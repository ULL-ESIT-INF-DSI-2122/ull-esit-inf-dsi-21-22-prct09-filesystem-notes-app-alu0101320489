import 'mocha';
import {expect} from 'chai';

import {AddMapReduce} from '../src/pe101/add'
import {MulMapReduce} from '../src/pe101/mul'

let add = new AddMapReduce();
let mul = new MulMapReduce();
describe('Test clase AddMapReduce', () => {
    
    it ('Funcionamiento de reduce Add', () => {
        expect(add.reduce(0,[1,2,3,4])).to.be.deep.equal(10);
    });
    it ('Funcionamiento de reduce Mul', () => {
        expect(mul.reduce(1,[1,2,3])).to.be.deep.equal(6);
    });
    it ('Funcionamiento de run', () => {
        expect(mul.run([1,2,3])).to.be.deep.equal([0,6,12]);
    });
    it ('Funcionamiento de run', () => {
        expect(add.run([1,2,3])).to.be.deep.equal([6,7,8]);
    });
});