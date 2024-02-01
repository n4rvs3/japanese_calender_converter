export { Era } from './era';

export const isValidEightDigitNumber = (value: number): boolean => {
  return value >= 10000000 && value <= 99999999;
};

export const isValidMonth = (value: number): boolean => {
  return value >= 1 && value <= 12;
}

export const isValidDate = (value: number): boolean => {
  return value >= 1 && value <= 31;
}