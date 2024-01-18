import { getRandomBoolean } from './randomBoolean';

/**
 * rowとcolumnに基づいた2次元配列を返す
 * 配列の初期値は0か1のランダム
 */
export const create2DArray = (row: number, column: number) => {
  const array2D = new Array(row);
  for (let i = 0; i < row; i++) {
    array2D[i] = new Array(column);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      array2D[i][j] = getRandomBoolean();
    }
  }

  return array2D;
};
