import {
  Era,
  isValidEightDigitNumber,
  isValidMonth,
  isValidDate,
} from '../utils';
import { DetailedEraInfo } from '../types/era';

const calcYear = (yyyymmdd: number, start: number): number => {
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

const calcMonth = (yyyymmdd: number): number | string => {
  try {
    const month = parseInt(yyyymmdd.toString().slice(4, 6), 10);
    if (!isValidMonth(month)) {
      throw new Error('month must be between 1 and 12.');
    }
    return month;
  } catch (error) {
    return (error as Error).message;
  }
};

const calcDate = (yyyymmdd: number): number | string => {
  try {
    const date = parseInt(yyyymmdd.toString().slice(6, 8), 10);
    if (!isValidDate(date)) {
      throw new Error('date must be between 1 and 31.');
    }
    return date;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const toJapaneseEra = (
  yyyymmdd: number
): DetailedEraInfo | { error: string; data: null } => {
  try {
    if (!isValidEightDigitNumber(yyyymmdd)) {
      throw new Error('yyyymmdd must be an 8-digit number.');
    }

    const era = Era;

    for (let i = 0; i < era.length; i++) {
      if (yyyymmdd >= era[i].start && yyyymmdd <= era[i].end) {
        const japaneseEra = {
          era: era[i].name,
          year: calcYear(yyyymmdd, era[i].start),
          month: calcMonth(yyyymmdd) as number,
          date: calcDate(yyyymmdd) as number,
        };
        return {
          error: null,
          data: japaneseEra,
        };
      }
    }

    throw new Error('yyyymmdd must be between 18680101 and 20341231.');
  } catch (error) {
    return {
      error: (error as Error).message,
      data: null,
    };
  }
};
