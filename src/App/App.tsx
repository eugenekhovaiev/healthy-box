import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';

import styles from './App.module.scss';

export function App() {
  return (
    <main className={styles.app}>
      <Header />
      <Home />
      <Footer />
    </main>
  );
}
