import { DetailedEraInfo, DetailedGregorioInfo } from '../types/era';
import { Era } from '../utils';
import { parse, compareAsc, isValid } from 'date-fns';

// 和暦から西暦に変換する関数
export const toGregorioEra = (
  japaneseEra: DetailedEraInfo | null
): DetailedGregorioInfo => {
  try {
    if (!japaneseEra || !japaneseEra.data) {
      // 何もない場合はエラーを返す、日本語でエラーメッセージを返す
      throw new Error('日本の元号を入力してください。');
    }

    const { era, year, month, date } = japaneseEra.data;
    const eraInfo = Era.find((e) => e.name === era);
    if (!eraInfo) {
      // 該当する元号がない場合は日本語でエラーを返す
      throw new Error('元号 ' + era + ' は存在しません。');
    }
    const { start, end } = eraInfo;
    const startYear = parseInt(start.toString().slice(0, 4), 10);
    const startMonth = parseInt(start.toString().slice(4, 6), 10);
    const startDate = parseInt(start.toString().slice(6, 8), 10);
    const endYear = parseInt(end.toString().slice(0, 4), 10);
    const endMonth = parseInt(end.toString().slice(4, 6), 10);
    const endDate = parseInt(end.toString().slice(6, 8), 10);

    let gregorianYear = startYear + year - 1;

    if (era === '昭和' && year === 64) {
      if (month === 1 && date >= 8) {
        throw new Error('昭和64年は1月7日までです。');
      } else {
        gregorianYear = 1989;
      }
    }

    const yearStr = gregorianYear.toString().padStart(4, '0');
    const monthStr = month.toString().padStart(2, '0');
    const dateStr = date.toString().padStart(2, '0');
    const yyyymmdd = yearStr + '-' + monthStr + '-' + dateStr;

    // date-fnsを使って日付の妥当性をチェック
    const parsedDate = parse(yyyymmdd, 'yyyy-MM-dd', new Date());
    if (!isValid(parsedDate)) {
      // 日付が不正な場合はエラーを返す(単純な日付)
      throw new Error(yyyymmdd + ' は存在しない日付です。');
    }

    // 年号の開始日と終了日をチェック
    // 入力された日付が開始日よりも前の場合はエラーを返す
    if (startYear && startMonth && startDate) {
      const startDateString =
        startYear.toString().padStart(4, '0') +
        '-' +
        startMonth.toString().padStart(2, '0') +
        '-' +
        startDate.toString().padStart(2, '0');
      const parsedStartDate = parse(startDateString, 'yyyy-MM-dd', new Date());
      if (compareAsc(parsedDate, parsedStartDate) < 0) {
        throw new Error(
          era + ' ' + year + '年' + month + '月' + date + '日は存在しません。'
        );
      }
    }

    // 入力された日付が終了日よりも後の場合はエラーを返す
    if (endYear && endMonth && endDate) {
      const endDateString =
        endYear.toString().padStart(4, '0') +
        '-' +
        endMonth.toString().padStart(2, '0') +
        '-' +
        endDate.toString().padStart(2, '0');
      const parsedEndDate = parse(endDateString, 'yyyy-MM-dd', new Date());
      if (compareAsc(parsedDate, parsedEndDate) > 0) {
        throw new Error(
          era + ' ' + year + '年' + month + '月' + date + '日は存在しません。'
        );
      }
    }

    return {
      error: null,
      data: {
        year: yyyymmdd,
      },
    };
  } catch (error) {
    return {
      error: (error as Error).message,
      data: null,
    };
  }
};
