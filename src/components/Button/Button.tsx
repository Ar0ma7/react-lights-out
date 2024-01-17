import { memo, useMemo } from 'react';
import { styles } from './Button.css';
import toggleIcon1 from '@/assets/toggleIcon1.svg';
import { ToggleMode } from '@/atoms/boardAtoms';

export type Props = {
  className?: string;
  icon?: ToggleMode | 'reset';
  onClick: () => void;
};

export const Button = memo(({ icon, onClick, ...props }: Props) => {
  const image = useMemo(() => {
    if (!icon) return null;
    switch (icon) {
      case 'cross':
        return <img css={styles.icon} src={toggleIcon1} alt="" />;
      case 'saltire':
        return (
          <img css={[styles.icon, styles.isSaltire]} src={toggleIcon1} alt="" />
        );
      default:
        return null;
    }
  }, [icon]);

  return (
    <div css={styles.button} onClick={onClick} {...props}>
      {image}
    </div>
  );
});
Button.displayName = 'Button';
