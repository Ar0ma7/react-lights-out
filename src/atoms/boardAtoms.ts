import { atom } from 'jotai';
import { Board, BoardSize } from './types/boardAtoms';

export const boardSizeAtom = atom<BoardSize>([5, 5]);

export const boardAtom = atom<Board>([]);
