import { atom } from 'jotai';

export type ToggleMode = 'cross' | 'saltire';
export const toggleModeAtom = atom<ToggleMode>('cross');

export const countAtom = atom<number>(0);
