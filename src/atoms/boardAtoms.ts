import { atom } from 'jotai';
import { create2DArray } from '@/utils/create2DArray';

export type BoardSize = number[];
// [row, column]
export const boardSizeAtom = atom<BoardSize>([5, 5]);

export type Board = number[][];
export const boardAtom = atom<Board>((get) => {
  const [row, column] = get(boardSizeAtom);
  return create2DArray(row, column);
});
