import { DetailedEraInfo } from '../types/era';
import { Era } from '../utils';

// 和暦から西暦に変換する関数
export const toGregorioEra = (era: DetailedEraInfo): number => {
  const { era: eraName, year, month, date } = era;
  const eraInfo = Era.find((e) => e.name === eraName);
  if (!eraInfo) {
    throw new Error('era must be one of 明治, 大正, 昭和, 平成, 令和.');
  }
  const { start } = eraInfo;
  const yearStr = year.toString().padStart(2, '0');
  const monthStr = month.toString().padStart(2, '0');
  const dateStr = date.toString().padStart(2, '0');
  const yyyymmdd = parseInt(`${start}${yearStr}${monthStr}${dateStr}`, 10);
  return yyyymmdd;
};