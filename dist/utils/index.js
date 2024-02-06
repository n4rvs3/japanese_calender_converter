"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = exports.isValidMonth = exports.isValidEightDigitNumber = exports.Era = void 0;
var era_1 = require("./era");
Object.defineProperty(exports, "Era", { enumerable: true, get: function () { return era_1.Era; } });
const isValidEightDigitNumber = (value) => {
    return value >= 10000000 && value <= 99999999;
};
exports.isValidEightDigitNumber = isValidEightDigitNumber;
const isValidMonth = (value) => {
    return value >= 1 && value <= 12;
};
exports.isValidMonth = isValidMonth;
const isValidDate = (value) => {
    return value >= 1 && value <= 31;
};
exports.isValidDate = isValidDate;
//# sourceMappingURL=index.js.map