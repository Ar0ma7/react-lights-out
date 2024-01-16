import { useAtom, useAtomValue } from 'jotai';
import { boardAtom, boardSizeAtom, toggleModeAtom } from '@/atoms/boardAtoms';

type Params = {
  row: number;
  column: number;
};

export const useToggleCell = (params: Params) => {
  const { row, column } = params;

  const toggleMode = useAtomValue(toggleModeAtom);
  const [maxRow, maxColumn] = useAtomValue(boardSizeAtom);
  const [board, setBoard] = useAtom(boardAtom);

  // 位置
  const top = row - 1;
  const left = column - 1;
  const right = column + 1;
  const bottom = row + 1;

  // 条件
  const isNotOverTop = top >= 0;
  const isNotOverLeft = left >= 0;
  const isNotOverRight = right <= maxColumn - 1;
  const isNotOverBottom = bottom <= maxRow - 1;

  return () => {
    const newBoard = [...board];

    // self
    newBoard[row][column] = !newBoard[row][column];
    // 十字
    if (toggleMode === 'cross') {
      // top
      if (isNotOverTop) newBoard[top][column] = !newBoard[top][column];
      // left
      if (isNotOverLeft) newBoard[row][left] = !newBoard[row][left];
      // right
      if (isNotOverRight) newBoard[row][right] = !newBoard[row][right];
      // bottom
      if (isNotOverBottom) newBoard[bottom][column] = !newBoard[bottom][column];
    }
    // 斜め十字
    else if (toggleMode === 'saltire') {
      // top-left
      if (isNotOverTop && isNotOverLeft)
        newBoard[top][left] = !newBoard[top][left];
      // top-right
      if (isNotOverTop && isNotOverRight)
        newBoard[top][right] = !newBoard[top][right];
      // bottom-left
      if (isNotOverBottom && isNotOverLeft)
        newBoard[bottom][left] = !newBoard[bottom][left];
      // bottom-right
      if (isNotOverBottom && isNotOverRight)
        newBoard[bottom][right] = !newBoard[bottom][right];
    }

    setBoard(newBoard);
  };
};
