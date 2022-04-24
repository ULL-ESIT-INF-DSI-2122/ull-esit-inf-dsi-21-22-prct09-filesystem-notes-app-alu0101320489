import 'mocha';
import {expect} from 'chai';

import {AddMapReduce} from '../src/pe101/add'
import {MulMapReduce} from '../src/pe101/mul'
import {SubMapReduce} from '../src/pe101/sub'

const add = new AddMapReduce();
const mul = new MulMapReduce();
const sub = new SubMapReduce();
describe('Test clase AddMapReduce', () => {
    
    it ('Funcionamiento de reduce Add', () => {
        expect(add.reduce(0,[1,2,3,4])).to.be.deep.equal(10);
    });
    it ('Funcionamiento de reduce Mul', () => {
        expect(mul.reduce(1,[1,2,3])).to.be.deep.equal(6);
    });
    it ('Funcionamiento de reduce SUb', () => {
        expect(sub.reduce(15,[1,2,3])).to.be.deep.equal(9);
    });
    it ('Funcionamiento de run', () => {
        expect(mul.run([1,2,3])).to.be.deep.equal([0,6,12]);
    });
    it ('Funcionamiento de run', () => {
        expect(add.run([1,2,3])).to.be.deep.equal([6,7,8]);
    });
    it ('Funcionamiento de run', () => {
        expect(sub.run([1,2,3])).to.be.deep.equal([-6,-5,-4]);
    });
    it ('Funcionamiento de hook', () => {
        expect(sub.hook()).to.be.deep.equal(undefined);
    });
    it ('Funcionamiento de hook', () => {
        expect(mul.hook()).to.be.deep.equal(undefined);
    });
    it ('Funcionamiento de hook', () => {
        expect(add.hook()).to.be.deep.equal(undefined);
    });
});