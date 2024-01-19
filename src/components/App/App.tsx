import { css } from '@emotion/react';
import { memo } from 'react';
import { isMobile } from 'react-device-detect';
import { styles } from './App.css';
import { ToggleMode } from '@/atoms/boardAtoms';
import { BoardContainer } from '@/components/Board';
import { Button } from '@/components/Button';
import { ToggleButton } from '@/components/ToggleButton';

type Props = {
  toggleMode: ToggleMode;
  canvasSize: number;
  onClickToggleMode: (mode: ToggleMode) => void;
  onClickNewGame: () => void;
};

export const App = memo(
  ({ toggleMode, canvasSize, onClickToggleMode, onClickNewGame }: Props) => {
    const gridTemplateRows = isMobile
      ? `1fr ${canvasSize}px 1fr`
      : `1fr 600px 1fr`;
    const gridTemplateColumns = isMobile ? `0 1fr 0` : `1fr 600px 1fr`;

    return (
      <div
        css={[styles.container, css({ gridTemplateRows, gridTemplateColumns })]}
      >
        <div css={styles.center}>
          <BoardContainer />
        </div>
        {isMobile ? (
          <>
            <div css={[styles.bottom, styles.mobileLayout]}>
              <div css={styles.buttonContainer}>
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
              <div css={styles.buttonContainer}>
                <Button icon="newGame" onClick={onClickNewGame} />
              </div>
            </div>
          </>
        ) : (
          <>
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
            <div
              css={[styles.right, styles.buttonContainer, styles.isVertical]}
            >
              <Button icon="newGame" onClick={onClickNewGame} />
            </div>
          </>
        )}
      </div>
    );
  }
);
App.displayName = 'App';
