"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJapaneseEra = void 0;
const utils_1 = require("../utils");
const calcYear = (yyyymmdd, start) => {
    const fullYear = parseInt(yyyymmdd.toString().slice(0, 4), 10);
    const eraStartYear = parseInt(start.toString().slice(0, 4), 10);
    // const eraEndYear = parseInt(end.toString().slice(0, 4), 10);
    const eraStartMonthDay = parseInt(start.toString().slice(4, 8), 10);
    const inputMonthDay = parseInt(yyyymmdd.toString().slice(4, 8), 10);
    let year = fullYear - eraStartYear + 1;
    // 昭和64年の特殊なケースを処理
    if (fullYear === 1989 && yyyymmdd <= 19890107) {
        year = year - 1;
    }
    // 平成元年の特殊なケースを処理
    if (fullYear === 1989 && yyyymmdd >= 19890108) {
        year = 1;
    }
    if (fullYear === eraStartYear && inputMonthDay < eraStartMonthDay) {
        year = year - 1;
    }
    return year;
};
const calcMonth = (yyyymmdd) => {
    try {
        const month = parseInt(yyyymmdd.toString().slice(4, 6), 10);
        if (!(0, utils_1.isValidMonth)(month)) {
            throw new Error('month must be between 1 and 12.');
        }
        return month;
    }
    catch (error) {
        return error.message;
    }
};
const calcDate = (yyyymmdd) => {
    try {
        const date = parseInt(yyyymmdd.toString().slice(6, 8), 10);
        if (!(0, utils_1.isValidDate)(date)) {
            throw new Error('date must be between 1 and 31.');
        }
        return date;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
const toJapaneseEra = (yyyymmdd) => {
    try {
        if (!(0, utils_1.isValidEightDigitNumber)(yyyymmdd)) {
            throw new Error('yyyymmdd must be an 8-digit number.');
        }
        const era = utils_1.Era;
        for (let i = 0; i < era.length; i++) {
            if (yyyymmdd >= era[i].start && yyyymmdd <= era[i].end) {
                const japaneseEra = {
                    era: era[i].name,
                    year: calcYear(yyyymmdd, era[i].start),
                    month: calcMonth(yyyymmdd),
                    date: calcDate(yyyymmdd),
                };
                return {
                    error: null,
                    data: japaneseEra,
                };
            }
        }
        throw new Error('yyyymmdd must be between 18680101 and 20341231.');
    }
    catch (error) {
        return {
            error: error.message,
            data: null,
        };
    }
};
exports.toJapaneseEra = toJapaneseEra;
//# sourceMappingURL=toJapaneseEra.js.map