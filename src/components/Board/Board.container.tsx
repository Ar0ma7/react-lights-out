import { useAtomValue } from 'jotai';
import { Board } from './Board';
import { boardAtom, boardSizeAtom } from '@/atoms/boardAtoms';

export const BoardContainer = () => {
  const boardSize = useAtomValue(boardSizeAtom);
  const board = useAtomValue(boardAtom);

  return <Board boardSize={boardSize} board={board} />;
};
