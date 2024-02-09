import { toGregorioEra } from './toGregorioEra';
import { toJapaneseEra } from './toJapaneseEra';

export * from './toJapaneseEra';
export * from './toGregorioEra';

const test = toGregorioEra({
  error: null,
  data: {
    era: '平成',
    year: 31,
    month: 4,
    date: 20,
  },
});

console.log(test);

const test2 = toJapaneseEra(19870108);

console.log(test2);
