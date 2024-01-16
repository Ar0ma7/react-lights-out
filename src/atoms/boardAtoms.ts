import { atom } from 'jotai';

export type BoardSize = [row: number, column: number];
export const boardSizeAtom = atom<BoardSize>([5, 5]);

export type Board = boolean[][];
export const boardAtom = atom<Board>([]);

export type ToggleMode = 'cross' | 'saltire';
export const toggleModeAtom = atom<ToggleMode>('cross');
