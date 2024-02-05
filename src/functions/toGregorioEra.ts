import { DetailedEraInfo, DetailedGregorioInfo } from '../types/era';
import { Era } from '../utils';
import { parse } from 'date-fns';

// 和暦から西暦に変換する関数
export const toGregorioEra = (
  japaneseEra: DetailedEraInfo | null
): DetailedGregorioInfo => {
  try {
    if (!japaneseEra || !japaneseEra.data) {
      throw new Error('Invalid Japanese era data.');
    }

    const { era, year, month, date } = japaneseEra.data;
    const eraInfo = Era.find((e) => e.name === era);
    if (!eraInfo) {
      throw new Error('era must be one of 明治, 大正, 昭和, 平成, 令和.');
    }
    const { start } = eraInfo;
    const startYear = parseInt(start.toString().slice(0, 4), 10);
    let gregorianYear = startYear + year - 1;

    // 昭和64年の特殊なケースを処理
    if (era === '昭和' && year === 64) {
      gregorianYear = 1989;
    }

    const yearStr = gregorianYear.toString().padStart(4, '0');
    const monthStr = month.toString().padStart(2, '0');
    const dateStr = date.toString().padStart(2, '0');
    const yyyymmdd = parseInt(`${yearStr}${monthStr}${dateStr}`, 10);

    // date-fnsを使って日付の妥当性をチェック
    if (
      yyyymmdd !== parse(yyyymmdd.toString(), 'yyyyMMdd', new Date()).getTime()
    ) {
      throw new Error('Invalid date.');
    }

    return {
      error: null,
      data: {
        year: gregorianYear,
      },
    };
  } catch (error) {
    return {
      error: (error as Error).message,
      data: null,
    };
  }
};
