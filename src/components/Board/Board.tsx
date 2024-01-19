import { css } from '@emotion/react';
import { memo } from 'react';
import { CellContainer } from '../Cell';
import { styles } from './Board.css.ts';
import { BoardSize, Board as BoardType } from '@/atoms/boardAtoms.js';

type Props = {
  boardSize: BoardSize;
  board: BoardType;
};

export const Board = memo(({ boardSize, board }: Props) => {
  const CellList = board.map((row, rowIndex) =>
    row.map((_, columnIndex) => {
      const gridArea = `area_${rowIndex}_${columnIndex}`;
      return (
        <div key={gridArea} css={{ gridArea }}>
          <CellContainer row={rowIndex} column={columnIndex} />
        </div>
      );
    })
  );
  //style
  const gridTemplateAreas: string = board
    .map(
      (y, yIdx) => `"${y.map((_, xIdx) => `area_${xIdx}_${yIdx}`).join(' ')}"`
    )
    .join('\n');

  return (
    <div
      css={[
        styles.container,
        css({
          gridTemplateAreas,
          gridTemplateRows: `repeat(${boardSize[0]}, 1fr)`,
          gridTemplateColumns: `repeat(${boardSize[1]}, 1fr)`,
        }),
      ]}
    >
      {CellList}
    </div>
  );
});
Board.displayName = 'Board';
