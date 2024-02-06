"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions");
describe('test toJapaneseEra', () => {
    // success case
    test('Successes of toJapaneseEra case', () => {
        expect((0, functions_1.toJapaneseEra)(20010125)).toEqual({
            era: '平成',
            year: 13,
            month: 1,
            date: 25,
        });
    });
    // failure case
    test('Failures of toJapaneseEra case', () => {
        expect((0, functions_1.toJapaneseEra)(20010125)).not.toEqual({
            era: '平成',
            year: 13,
            month: 1,
            date: 26,
        });
    });
    // throw error case
    test('Throw error case', () => {
        expect(() => (0, functions_1.toJapaneseEra)(18671231)).toThrow('yyyymmdd must be between 18680101 and 20341231.');
    });
    // edge case
    test('Edge case 1', () => {
        expect((0, functions_1.toJapaneseEra)(18680101)).toEqual({
            era: '明治',
            year: 1,
            month: 1,
            date: 1,
        });
    });
    test('Edge case 2', () => {
        expect((0, functions_1.toJapaneseEra)(19120729)).toEqual({
            era: '明治',
            year: 45,
            month: 7,
            date: 29,
        });
    });
    test('Edge case 3', () => {
        expect((0, functions_1.toJapaneseEra)(19120730)).toEqual({
            era: '大正',
            year: 1,
            month: 7,
            date: 30,
        });
    });
    test('Edge case 4', () => {
        expect((0, functions_1.toJapaneseEra)(19251225)).toEqual({
            era: '大正',
            year: 14,
            month: 12,
            date: 25,
        });
    });
    test('Edge case 5', () => {
        expect((0, functions_1.toJapaneseEra)(19251226)).toEqual({
            era: '昭和',
            year: 1,
            month: 12,
            date: 26,
        });
    });
    test('Edge case 6', () => {
        expect((0, functions_1.toJapaneseEra)(19890107)).toEqual({
            era: '昭和',
            year: 64,
            month: 1,
            date: 7,
        });
    });
    test('Edge case 7', () => {
        expect((0, functions_1.toJapaneseEra)(19890108)).toEqual({
            era: '平成',
            year: 1,
            month: 1,
            date: 8,
        });
    });
    test('Edge case 8', () => {
        expect((0, functions_1.toJapaneseEra)(20190430)).toEqual({
            era: '平成',
            year: 31,
            month: 4,
            date: 30,
        });
    });
    test('Edge case 9', () => {
        expect((0, functions_1.toJapaneseEra)(20190501)).toEqual({
            era: '令和',
            year: 1,
            month: 5,
            date: 1,
        });
    });
});
//# sourceMappingURL=toJapaneseEra.test.js.map