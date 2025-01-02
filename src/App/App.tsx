import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { Rations } from '../pages/Rations';

import styles from './App.module.scss';

export function App() {
  return (
    <Router>
      <main className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rations" element={<Rations />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
