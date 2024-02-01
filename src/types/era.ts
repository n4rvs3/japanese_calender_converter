export type EraType = {
  start: number;
  end: number;
  name: '明治' | '大正' | '昭和' | '平成' | '令和';
  nameKana: 'めいじ' | 'たいしょう' | 'しょうわ' | 'へいせい' | 'れいわ';
};

export interface DetailedEraInfo {
  era: '明治' | '大正' | '昭和' | '平成' | '令和';
  year: number;
  month: number;
  date: number;
}
