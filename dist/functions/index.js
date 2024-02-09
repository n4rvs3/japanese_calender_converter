"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const toGregorioEra_1 = require("./toGregorioEra");
const toJapaneseEra_1 = require("./toJapaneseEra");
__exportStar(require("./toJapaneseEra"), exports);
__exportStar(require("./toGregorioEra"), exports);
const test = (0, toGregorioEra_1.toGregorioEra)({
    error: null,
    data: {
        era: '平成',
        year: 31,
        month: 4,
        date: 20,
    },
});
console.log(test);
const test2 = (0, toJapaneseEra_1.toJapaneseEra)(19870108);
console.log(test2);
//# sourceMappingURL=index.js.map