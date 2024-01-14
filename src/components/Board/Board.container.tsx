import { useAtom } from 'jotai';
import { Board } from './Board';
import { boardAtom, boardSizeAtom } from '@/atoms/boardAtoms';

export function BoardContainer() {
  const [boardSize] = useAtom(boardSizeAtom);
  const [board] = useAtom(boardAtom);

  return <Board boardSize={boardSize} board={board} />;
}
