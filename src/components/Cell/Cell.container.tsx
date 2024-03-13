import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { Cell } from './Cell';
import { boardAtom } from '@/atoms/boardAtoms';
import { countAtom } from '@/atoms/gameAtoms';
import { useToggleCell } from '@/hooks/useToggleCell';

type Props = {
  row: number;
  column: number;
};

export const CellContainer = ({ row, column }: Props) => {
  const board = useAtomValue(boardAtom);
  const setCount = useSetAtom(countAtom);
  const toggleCell = useToggleCell({ row, column });

  const handleClick = useCallback(() => {
    toggleCell();
    setCount((prev) => prev++);
  }, [setCount, toggleCell]);

  return <Cell isOn={board[row][column]} onClick={handleClick} />;
};
