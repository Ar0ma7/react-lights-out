import { getRandomBinary } from './ramdomBinary';

/**
 * rowとcolumnに基づいた2次元配列を返す
 * 配列の初期値は0か1のランダム
 */
export const create2DArray = (row: number, column: number) => {
  return Array.from({ length: row }, () => Array(column).fill(getRandomBinary));
};
