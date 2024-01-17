import { memo } from 'react';
import { styles } from './Cell.css.ts';

type Props = {
  isOn: boolean;
  onClick: () => void;
};

export const Cell = memo((props: Props) => {
  const { isOn, onClick } = props;

  return (
    <div css={[styles.cell, isOn ? styles.isOn : '']} onClick={onClick}></div>
  );
});
Cell.displayName = 'Cell';
