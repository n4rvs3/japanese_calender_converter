export type EraType = {
    start: number;
    end: number;
    name: '明治' | '大正' | '昭和' | '平成' | '令和';
    nameKana: 'めいじ' | 'たいしょう' | 'しょうわ' | 'へいせい' | 'れいわ';
    range?: number[];
};
export interface DetailedEraInfo {
    error: string | null;
    data: {
        era: '明治' | '大正' | '昭和' | '平成' | '令和';
        year: number;
        month: number;
        date: number;
    } | null;
}
export interface DetailedGregorioInfo {
    error: string | null;
    data: {
        year: number;
    } | null;
}
//# sourceMappingURL=era.d.ts.map