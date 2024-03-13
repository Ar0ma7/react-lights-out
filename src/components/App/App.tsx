import { css } from '@emotion/react';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '../Modal';
import { styles } from './App.css';
import { ToggleMode } from '@/atoms/gameAtoms';
import { BoardContainer } from '@/components/Board';
import { Button } from '@/components/Button';
import { ToggleButton } from '@/components/ToggleButton';

type Props = {
  toggleMode: ToggleMode;
  canvasSize: number;
  count: number;
  isAllTrue: boolean;
  onClickToggleMode: (mode: ToggleMode) => void;
  onClickNewGame: () => void;
  onClickModalClose?: () => void;
};

export const App = memo(
  ({
    toggleMode,
    canvasSize,
    count,
    isAllTrue,
    onClickToggleMode,
    onClickNewGame,
    onClickModalClose,
  }: Props) => {
    const [modalOpen, setModalOpen] = useState(false);

    const gridTemplateRows = isMobile
      ? `1fr ${canvasSize}px 1fr`
      : `1fr 600px 1fr`;
    const gridTemplateColumns = isMobile ? `0 1fr 0` : `1fr 600px 1fr`;

    useEffect(() => {
      if (isAllTrue) setModalOpen(true);
    }, [isAllTrue]);

    return (
      <div>
        <div
          css={[
            styles.container,
            css({ gridTemplateRows, gridTemplateColumns }),
          ]}
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
              <div
                css={[styles.left, styles.buttonContainer, styles.isVertical]}
              >
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

        {modalOpen && (
          <Modal
            onClose={() => {
              onClickModalClose?.();
              setModalOpen(false);
            }}
          >
            <div css={styles.modalInner}>
              <p css={styles.modalTitle}>Clear !</p>
              <p css={styles.modalMessage}>試行回数：{count}</p>
            </div>
          </Modal>
        )}
      </div>
    );
  }
);
App.displayName = 'App';
