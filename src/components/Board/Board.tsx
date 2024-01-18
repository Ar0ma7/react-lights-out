import { css } from '@emotion/react';
import { CellContainer } from '../Cell';
import { gap, styles } from './Board.css.ts';
import { BoardSize, Board } from '@/atoms/boardAtoms.js';

type Props = {
  boardSize: BoardSize;
  board: Board;
};

export function Board({ boardSize, board }: Props) {
  const gridTemplateAreas: string = board
    .map(
      (y, yIdx) => `"${y.map((_, xIdx) => `area_${xIdx}_${yIdx}`).join(' ')}"`
    )
    .join('\n');

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

  return (
    <div
      css={[
        styles.container,
        css({
          gridTemplateAreas,
          gridTemplateRows: `${boardSize[0]}`,
          gridTemplateColumns: `${boardSize[1]}`,
          width: `${boardSize[0] * 100 + boardSize[0] * gap + gap}px`,
          height: `${boardSize[1] * 100 + boardSize[1] * gap + gap}px`,
        }),
      ]}
    >
      {CellList}
    </div>
  );
}
