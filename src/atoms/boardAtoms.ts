import { atom } from 'jotai';
import { create2DArray } from '@/utils/create2DArray';

export type BoardSize = [row: number, column: number];
export const boardSizeAtom = atom<BoardSize>([5, 5]);

export type Board = boolean[][];
export const boardAtom = atom<Board>(create2DArray(5, 5));

export type ToggleMode = 'cross' | 'saltire';
export const toggleModeAtom = atom<ToggleMode>('cross');
