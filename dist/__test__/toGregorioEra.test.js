"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
describe('test toGregorioEra', () => {
    test('Successes of toGregorioEra case', () => {
        expect((0, functions_1.toGregorioEra)({
            era: '平成',
            year: 13,
            month: 1,
            date: 25,
        })).toEqual(20010125);
    });
    test('Failures of toGregorioEra case', () => {
        expect((0, functions_1.toGregorioEra)({
            era: '平成',
            year: 13,
            month: 1,
            date: 25,
        })).not.toEqual(20010126);
    });
    test('Throw error case', () => {
        expect(() => (0, functions_1.toGregorioEra)({
            era: '江戸',
            year: 13,
            month: 1,
            date: 25,
        })).toThrow('era must be one of 明治, 大正, 昭和, 平成, 令和.');
    });
    test('Edge case 1', () => {
        expect((0, functions_1.toGregorioEra)({
            era: '明治',
            year: 1,
            month: 1,
            date: 1,
        })).toEqual(18680101);
    });
    test('Edge case 2', () => {
        expect((0, functions_1.toGregorioEra)({
            era: '明治',
            year: 45,
            month: 7,
            date: 29,
        })).toEqual(19120729);
    });
    test('Edge case 3', () => {
        expect((0, functions_1.toGregorioEra)({
            era: '大正',
            year: 1,
            month: 7,
            date: 30,
        })).toEqual(19120730);
    });
    test('Edge case 4', () => {
        expect((0, functions_1.toGregorioEra)({
            era: '大正',
            year: 14,
            month: 12,
            date: 25,
        })).toEqual(19251225);
    });
    test('Edge case 5', () => {
        expect((0, functions_1.toGregorioEra)({
            era: '昭和',
            year: 1,
            month: 12,
            date: 26,
        })).toEqual(19251226);
    });
    test('Edge case 6', () => {
        expect((0, functions_1.toGregorioEra)({
            era: '昭和',
            year: 64,
            month: 1,
            date: 7,
        })).toEqual(19890107);
    });
    test('Edge case 7', () => {
        expect((0, functions_1.toGregorioEra)({
            era: '平成',
            year: 1,
            month: 1,
            date: 8,
        })).toEqual(19890108);
    });
    test('Edge case 8', () => {
        expect((0, functions_1.toGregorioEra)({
            era: '平成',
            year: 31,
            month: 4,
            date: 30,
        })).toEqual(20190430);
    });
    test('Edge case 9', () => {
        expect((0, functions_1.toGregorioEra)({
            era: '令和',
            year: 1,
            month: 5,
            date: 1,
        })).toEqual(20190501);
    });
});
//# sourceMappingURL=toGregorioEra.test.js.map