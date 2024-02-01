import { Era } from '../utils';

// 西暦を和暦に変換する関数
export const toJapaneseEra = (yymmdd: number): string => {
  const era = Era;

  let japaneseEra = '不明';

  // eraをループで回す
  // era.startとera.endの間にyymmddがあれば、そのera.nameを返す

  // 1. eraをループで回す
  for (let i = 0; i < era.length; i++) {
    // 2. era.startとera.endの間にyymmddがあれば、そのera.nameを返す
    if (yymmdd >= era[i].start && yymmdd <= era[i].end) {
      japaneseEra = era[i].name;
    }
  }

  return japaneseEra;
};
