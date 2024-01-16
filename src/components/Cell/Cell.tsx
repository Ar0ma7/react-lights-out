import { styles } from './Cell.css.ts';

type Props = {
  value: boolean;
  onClick: () => void;
};
export function Cell(props: Props) {
  const { value, onClick } = props;
  return (
    <div css={[styles.cell, value ? styles.isOn : '']} onClick={onClick}></div>
  );
}
