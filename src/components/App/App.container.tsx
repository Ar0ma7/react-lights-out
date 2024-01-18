import { useAtom, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { App } from './App';
import { ToggleMode, boardAtom, toggleModeAtom } from '@/atoms/boardAtoms';
import { create2DArray } from '@/utils/create2DArray';

export const AppContainer = () => {
  const setBoard = useSetAtom(boardAtom);
  const [toggleMode, setToggleMode] = useAtom(toggleModeAtom);

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
      onClickToggleMode={handleClickToggleMode}
      onClickNewGame={handleClickNewGame}
    />
  );
};
