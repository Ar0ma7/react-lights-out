import { Cell } from '../Cell';
import styles from './Board.module.scss';
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
        <div key={gridArea} style={{ gridArea }}>
          <Cell />
        </div>
      );
    })
  );

  return (
    <div
      className={styles.container}
      style={{
        gridTemplateAreas,
        gridTemplateRows: `${boardSize[0]}`,
        gridTemplateColumns: `${boardSize[1]}`,
        width: `${boardSize[0] * 100}px`,
        height: `${boardSize[1] * 100}px`,
      }}
    >
      {CellList}
    </div>
  );
}
