import { css } from '@emotion/react';
import { isMobile } from 'react-device-detect';

export const styles = {
  overlay: css({
    background: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
  container: css({
    ...(isMobile ? {} : { minWidth: '500px', minHeight: '300px' }),
    borderRadius: 5,
    padding: 20,
    overflow: 'hidden',
    background: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
  inner: css({
    position: 'relative',
  }),
  close: css({
    position: 'absolute',
    top: 0,
    right: 0,
    ':hover': {
      cursor: 'pointer',
    },
  }),
};
