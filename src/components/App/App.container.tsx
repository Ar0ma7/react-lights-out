import { useAtom, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { App } from './App';
import { boardAtom } from '@/atoms/boardAtoms';
import { ToggleMode, toggleModeAtom } from '@/atoms/gameAtoms';
import { useGetWindowSize } from '@/hooks/useGetWindowSize';
import { create2DArray } from '@/utils/create2DArray';

export const AppContainer = () => {
  const setBoard = useSetAtom(boardAtom);
  const [toggleMode, setToggleMode] = useAtom(toggleModeAtom);

  const { width, height } = useGetWindowSize();

  const canvasSize = width <= height ? width : height;

  const handleClickToggleMode = useCallback(
    (mode: ToggleMode) => {
      setToggleMode(mode);
    },
    [setToggleMode]
  );

  const handleClickNewGame = useCallback(() => {
    setBoard(create2DArray(5, 5));
  }, [setBoard]);

  return (
    <App
      toggleMode={toggleMode}
      canvasSize={canvasSize}
      onClickToggleMode={handleClickToggleMode}
      onClickNewGame={handleClickNewGame}
    />
  );
};
