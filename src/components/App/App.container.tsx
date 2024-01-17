import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { App } from './App';
import { boardAtom, boardSizeAtom } from '@/atoms/boardAtoms';
import { create2DArray } from '@/utils/create2DArray';

export function AppContainer() {
  const boardSize = useAtomValue(boardSizeAtom);
  const setBoard = useSetAtom(boardAtom);

  // on mount
  useEffect(() => {
    //初期盤面の設定
    setBoard(create2DArray(...boardSize));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <App />;
}
