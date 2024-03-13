import { useAtomValue } from 'jotai';
import { boardAtom } from '@/atoms/boardAtoms';

/** クリアしたかを検証する */
export const useValidateBoard = (): boolean => {
  const board = useAtomValue(boardAtom);

  const isAllTrue = board.every((row) => row.every((value) => value));

  return isAllTrue;
};
