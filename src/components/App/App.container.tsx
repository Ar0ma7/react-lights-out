import { useAtom, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { App } from './App';
import { boardAtom } from '@/atoms/boardAtoms';
import { ToggleMode, countAtom, toggleModeAtom } from '@/atoms/gameAtoms';
import { useGetWindowSize } from '@/hooks/useGetWindowSize';
import { useValidateBoard } from '@/hooks/useValidateBoard';
import { create2DArray } from '@/utils/create2DArray';

export const AppContainer = () => {
  const setBoard = useSetAtom(boardAtom);
  const [count, setCount] = useAtom(countAtom);
  const [toggleMode, setToggleMode] = useAtom(toggleModeAtom);

  const { width, height } = useGetWindowSize();
  const isAllTrue = useValidateBoard();

  const canvasSize = width <= height ? width : height;

  const handleClickToggleMode = useCallback(
    (mode: ToggleMode) => {
      setToggleMode(mode);
    },
    [setToggleMode]
  );

  const handleClickNewGame = useCallback(() => {
    setBoard(create2DArray(5, 5));
    setCount(0);
  }, [setBoard, setCount]);

  return (
    <App
      toggleMode={toggleMode}
      canvasSize={canvasSize}
      count={count}
      isAllTrue={isAllTrue}
      onClickToggleMode={handleClickToggleMode}
      onClickNewGame={handleClickNewGame}
    />
  );
};
