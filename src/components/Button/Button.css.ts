import { css } from '@emotion/react';

export const styles = {
  button: css({
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: 80,
    height: 80,
    background: 'var(--button-color)',
    cursor: 'pointer',
    ':hover': {
      opacity: 0.8,
    },
  }),
  isMobile: css({
    width: 50,
    height: 50,
  }),
  icon: css({
    display: 'block',
    width: '70%',
    height: 'auto',
  }),
  isSaltire: css({
    transform: 'rotate(45deg)',
  }),
  fontAwesomeIcon: css({
    color: 'var(--border-color)',
  }),
};
