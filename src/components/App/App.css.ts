import { css } from '@emotion/react';

export const styles = {
  wrapper: css({
    position: 'relative',
  }),
  container: css({
    display: 'grid',
    gridTemplateAreas: `"notUse1 top notUse2" "left center right" "notUse3 bottom notUse4"`,
    justifyItems: 'center',
    alignItems: 'center',
    height: '100vh',
  }),
  center: css({
    gridArea: 'center',
    padding: 20,
    width: '100%',
    height: '100%',
  }),
  top: css({
    gridArea: 'top',
  }),
  left: css({
    gridArea: 'left',
    justifySelf: 'self-end',
    padding: '0 10px',
  }),
  right: css({
    gridArea: 'right',
    justifySelf: 'self-start',
    padding: '0 10px',
  }),
  bottom: css({
    gridArea: 'bottom',
    alignSelf: 'self-start',
  }),
  buttonContainer: css({
    display: 'flex',
    gap: 10,
  }),
  isVertical: css({
    flexDirection: 'column',
  }),
  mobileLayout: css({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 30px',
    width: '100%',
  }),
  modalInner: css({
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  }),
  modalTitle: css({
    fontSize: 32,
    fontWeight: 'bold',
  }),
  modalMessage: css({
    marginTop: 10,
  }),
};
