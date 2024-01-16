import { getRandomBoolean } from './randomBoolean';

/**
 * rowとcolumnに基づいた2次元配列を返す
 * 配列の初期値は0か1のランダム
 */
export const create2DArray = (row: number, column: number) => {
  // 2次元配列の初期化
  const array2D = new Array(row);
  for (let i = 0; i < row; i++) {
    array2D[i] = new Array(column);
  }

  // 2次元配列の要素を初期化（例：0で埋める）
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      array2D[i][j] = getRandomBoolean(); // 初期値を変更したい場合はここを変更
    }
  }

  return array2D;
};
