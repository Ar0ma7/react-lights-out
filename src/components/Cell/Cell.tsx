import { styles } from './Cell.css.ts';

type Props = {
  isOn: boolean;
  onClick: () => void;
};

export function Cell(props: Props) {
  const { isOn, onClick } = props;

  return (
    <div css={[styles.cell, isOn ? styles.isOn : '']} onClick={onClick}></div>
  );
}
