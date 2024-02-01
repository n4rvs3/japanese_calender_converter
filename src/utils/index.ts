export { Era } from './era';

export const isValidEightDigitNumber = (value: number): boolean => {
  return value >= 10000000 && value <= 99999999;
};
