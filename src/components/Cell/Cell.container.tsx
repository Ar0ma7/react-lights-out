import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { Cell } from './Cell';
import { boardAtom } from '@/atoms/boardAtoms';

type Props = {
  row: number;
  column: number;
};

export function CellContainer(props: Props) {
  const { row, column } = props;
  const [board, setBoard] = useAtom(boardAtom);

  const handleClick = useCallback(() => {
    const newBoard = [...board];
    newBoard[row][column] = !newBoard[row][column];
    setBoard(newBoard);
  }, [row, column, board, setBoard]);

  return <Cell value={board[row][column]} onClick={handleClick} />;
}
