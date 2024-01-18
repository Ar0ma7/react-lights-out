import { styles } from './ToggleButton.css';
import { Button, ButtonProps } from '@/components/Button';

type Props = ButtonProps & {
  isActive: boolean;
};

export const ToggleButton = ({ isActive, ...buttonProps }: Props) => {
  return (
    <Button
      css={isActive ? styles.isActive : styles.disabled}
      {...buttonProps}
    />
  );
};
