import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { Board } from './Board';
import { boardAtom, boardSizeAtom } from '@/atoms/boardAtoms';
import { create2DArray } from '@/utils/create2DArray';

export const BoardContainer = () => {
  const boardSize = useAtomValue(boardSizeAtom);
  const [board, setBoard] = useAtom(boardAtom);

  // on mount
  useEffect(() => {
    setBoard(create2DArray(...boardSize));
  }, [boardSize, setBoard]);

  return <Board boardSize={boardSize} board={board} />;
};
