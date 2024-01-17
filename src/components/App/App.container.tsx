import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { App } from './App';
import {
  ToggleMode,
  boardAtom,
  boardSizeAtom,
  toggleModeAtom,
} from '@/atoms/boardAtoms';
import { create2DArray } from '@/utils/create2DArray';

export const AppContainer = () => {
  const boardSize = useAtomValue(boardSizeAtom);
  const setBoard = useSetAtom(boardAtom);
  const [toggleMode, setToggleMode] = useAtom(toggleModeAtom);

  const handleClickToggleMode = useCallback(
    (mode: ToggleMode) => {
      setToggleMode(mode);
    },
    [setToggleMode]
  );

  // on mount
  useEffect(() => {
    //初期盤面の設定
    setBoard(create2DArray(...boardSize));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <App toggleMode={toggleMode} onClickToggleMode={handleClickToggleMode} />
  );
};
