import { useAtom, useAtomValue } from 'jotai';
import { boardAtom, boardSizeAtom } from '@/atoms/boardAtoms';
import { toggleModeAtom } from '@/atoms/gameAtoms';

type Params = {
  row: number;
  column: number;
};

/** toggleMode に基づいてセルの状態を切り替える */
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

  const newBoard = [...board];

  // 十字
  const toggleCross = () => {
    // top
    if (isNotOverTop) newBoard[top][column] = !newBoard[top][column];
    // left
    if (isNotOverLeft) newBoard[row][left] = !newBoard[row][left];
    // right
    if (isNotOverRight) newBoard[row][right] = !newBoard[row][right];
    // bottom
    if (isNotOverBottom) newBoard[bottom][column] = !newBoard[bottom][column];
  };

  // 斜め十字
  const toggleSaltire = () => {
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
  };

  return () => {
    // self
    newBoard[row][column] = !newBoard[row][column];

    if (toggleMode === 'cross') {
      toggleCross();
    } else if (toggleMode === 'saltire') {
      toggleSaltire();
    }

    setBoard(newBoard);
  };
};
