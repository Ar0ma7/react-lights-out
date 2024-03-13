import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, memo } from 'react';
import { styles } from './Modal.css';

type Props = {
  children: ReactNode;
  onClose?: () => void;
};

export const Modal = memo(({ children, onClose }: Props) => {
  return (
    <>
      <div css={styles.overlay} onClick={onClose}></div>
      <div css={styles.container}>
        <div css={styles.inner}>
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            css={styles.close}
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </>
  );
});
Modal.displayName = 'Modal';
