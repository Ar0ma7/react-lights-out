import { css } from '@emotion/react';
import { Cell } from '../Cell';
import { styles } from './Board.css.ts';
import { BoardSize, Board } from '@/atoms/boardAtoms';

type Props = {
  boardSize: BoardSize;
  board: Board;
};

export function Board(props: Props) {
  const { boardSize, board } = props;

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
          <Cell />
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
          width: `${boardSize[0] * 100}px`,
          height: `${boardSize[1] * 100}px`,
        }),
      ]}
    >
      {CellList}
    </div>
  );
}
