import { styles } from './App.css';
import { BoardContainer } from '@/components/Board';

export function App() {
  return (
    <div css={styles.container}>
      <div css={styles.center}>
        <BoardContainer />
      </div>
    </div>
  );
}
