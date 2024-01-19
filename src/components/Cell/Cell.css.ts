import { css } from '@emotion/react';

export const styles = {
  cell: css({
    background: 'var(--cell-background-color-off)',
    width: `100%`,
    height: `100%`,
    borderRadius: 5,
  }),
  isOn: css({
    background: 'var(--cell-background-color-on)',
  }),
};
