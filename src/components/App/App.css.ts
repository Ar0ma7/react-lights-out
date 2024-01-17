import { css } from '@emotion/react';

export const styles = {
  container: css({
    display: 'grid',
    gridTemplateAreas: `"notUse1 top notUse2" "left center right" "notUse3 bottom notUse4"`,
    gridTemplateRows: '1fr auto 1fr',
    gridTemplateColumns: '1fr auto 1fr',
    justifyItems: 'center',
    alignItems: 'center',
    height: '100vh',
  }),
  center: css({
    gridArea: 'center',
  }),
  top: css({
    gridArea: 'top',
  }),
  left: css({
    gridArea: 'left',
  }),
  right: css({
    gridArea: 'right',
  }),
  bottom: css({
    gridArea: 'bottom',
  }),
};
