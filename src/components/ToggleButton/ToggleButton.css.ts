import { css } from '@emotion/react';

export const styles = {
  isActive: css({
    background: 'var(--toggle-button-active)',
  }),
  disabled: css({
    background: 'var(--cell-background-color-off)',
  }),
};
