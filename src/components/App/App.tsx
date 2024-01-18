import { styles } from './App.css';
import { ToggleMode } from '@/atoms/boardAtoms';
import { BoardContainer } from '@/components/Board';
import { Button } from '@/components/Button';
import { ToggleButton } from '@/components/ToggleButton';

type Props = {
  toggleMode: ToggleMode;
  onClickToggleMode: (mode: ToggleMode) => void;
  onClickNewGame: () => void;
};

export const App = ({
  toggleMode,
  onClickToggleMode,
  onClickNewGame,
}: Props) => {
  return (
    <div css={styles.container}>
      <div css={[styles.left, styles.buttonContainer, styles.isVertical]}>
        <ToggleButton
          icon="cross"
          isActive={toggleMode === 'cross'}
          onClick={() => onClickToggleMode('cross')}
        />
        <ToggleButton
          icon="saltire"
          isActive={toggleMode === 'saltire'}
          onClick={() => onClickToggleMode('saltire')}
        />
      </div>
      <div css={styles.center}>
        <BoardContainer />
      </div>
      <div css={[styles.right, styles.buttonContainer, styles.isVertical]}>
        <Button icon="newGame" onClick={onClickNewGame} />
      </div>
    </div>
  );
};
