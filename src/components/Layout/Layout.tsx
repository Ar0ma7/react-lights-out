import { ReactNode } from 'react';
import { styles } from './Layout.css.ts';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return <div css={styles.container}>{children}</div>;
}
