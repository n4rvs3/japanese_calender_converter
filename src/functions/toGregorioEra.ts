import { DetailedEraInfo } from '../types/era';
import { Era } from '../utils';

// 和暦から西暦に変換する関数
export const toGregorioEra = (japaneseEra: DetailedEraInfo): number => {
  const { era: eraName, year, month, date } = japaneseEra;
  const eraInfo = Era.find((e) => e.name === eraName);
  if (!eraInfo) {
    throw new Error('era must be one of 明治, 大正, 昭和, 平成, 令和.');
  }
  const { start } = eraInfo;
  const startYear = parseInt(start.toString().slice(0, 4), 10);
  let gregorianYear = startYear + year - 1;

  // 昭和64年の特殊なケースを処理
  if (eraName === '昭和' && year === 64) {
    gregorianYear = 1989;
  }

  const yearStr = gregorianYear.toString().padStart(4, '0');
  const monthStr = month.toString().padStart(2, '0');
  const dateStr = date.toString().padStart(2, '0');
  const yyyymmdd = parseInt(`${yearStr}${monthStr}${dateStr}`, 10);
  return yyyymmdd;
};
