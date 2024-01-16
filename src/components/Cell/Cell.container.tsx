import { useAtomValue } from 'jotai';
import { useCallback } from 'react';
import { Cell } from './Cell';
import { boardAtom } from '@/atoms/boardAtoms';
import { useToggleCell } from '@/hooks/useToggleCell';

type Props = {
  row: number;
  column: number;
};

export function CellContainer(props: Props) {
  const { row, column } = props;
  const board = useAtomValue(boardAtom);
  const toggleCell = useToggleCell({ row, column });

  const handleClick = useCallback(() => {
    toggleCell();
  }, [toggleCell]);

  return <Cell isOn={board[row][column]} onClick={handleClick} />;
}
