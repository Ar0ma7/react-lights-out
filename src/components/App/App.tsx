import { ToggleButton } from '../ToggleButton';
import { styles } from './App.css';
import { ToggleMode } from '@/atoms/boardAtoms';
import { BoardContainer } from '@/components/Board';

type Props = {
  toggleMode: ToggleMode;
  onClickToggleMode: (mode: ToggleMode) => void;
};

export const App = ({ toggleMode, onClickToggleMode }: Props) => {
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
    </div>
  );
};
