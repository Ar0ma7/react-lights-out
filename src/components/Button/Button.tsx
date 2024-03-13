import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, memo, useMemo } from 'react';
import { isMobile } from 'react-device-detect';
import { styles } from './Button.css';
import toggleIcon1 from '@/assets/toggleIcon1.svg';
import { ToggleMode } from '@/atoms/gameAtoms';

type Icon = ToggleMode | 'newGame';

export type Props = {
  className?: string;
  children?: ReactNode;
  icon?: Icon;
  onClick: () => void;
};

export const Button = memo(({ icon, onClick, children, ...props }: Props) => {
  const iconImage = useMemo(() => {
    if (!icon) return null;
    switch (icon) {
      case 'cross':
        return <img css={styles.icon} src={toggleIcon1} alt="" />;
      case 'saltire':
        return (
          <img css={[styles.icon, styles.isSaltire]} src={toggleIcon1} alt="" />
        );
      case 'newGame':
        return (
          <FontAwesomeIcon
            icon={faArrowsRotate}
            size="2x"
            css={styles.fontAwesomeIcon}
          />
        );
      default:
        return null;
    }
  }, [icon]);

  return (
    <div
      css={[styles.button, isMobile && styles.isMobile]}
      onClick={onClick}
      {...props}
    >
      {iconImage || children}
    </div>
  );
});
Button.displayName = 'Button';
