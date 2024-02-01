import { Era, isValidEightDigitNumber } from '../utils';
import { DetailedEraInfo } from '../types/era';

const calcYear = (yyyymmdd: number, start: number): number => {
  const fullYear = parseInt(yyyymmdd.toString().slice(0, 4), 10);
  const eraStartYear = parseInt(start.toString().slice(0, 4), 10);
  const year = fullYear - eraStartYear + 1;
  return year;
};

const calcMonth = (yyyymmdd: number): number => {
  const month = parseInt(yyyymmdd.toString().slice(4, 6), 10);
  return month;
};

const calcDate = (yyyymmdd: number): number => {
  const date = parseInt(yyyymmdd.toString().slice(6, 8), 10);
  return date;
};

// 西暦を和暦に変換する関数
export const toJapaneseEra = (yyyymmdd: number): DetailedEraInfo => {
  if (!isValidEightDigitNumber(yyyymmdd)) {
    throw new Error('yyyymmdd must be an 8-digit number.');
  }

  const era = Era;
  let japaneseEra: DetailedEraInfo = {} as DetailedEraInfo;

  for (let i = 0; i < era.length; i++) {
    if (yyyymmdd >= era[i].start && yyyymmdd <= era[i].end) {
      const tmpEra = era[i].name;
      const tmpYear = calcYear(yyyymmdd, era[i].start);
      const tmpMonth = calcMonth(yyyymmdd);
      const tmpDate = calcDate(yyyymmdd);
      return (japaneseEra = {
        era: tmpEra,
        year: tmpYear,
        month: tmpMonth,
        date: tmpDate,
      });
    }
  }

  return japaneseEra;
};
