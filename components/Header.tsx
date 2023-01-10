import { HiMenuAlt2 } from 'react-icons/hi';

import Container from './Container';
import Logo from './Logo';

import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <>
          <Logo />
          <button type="button">
            <HiMenuAlt2 size={24} />
          </button>
        </>
      </Container>
    </header>
  );
}
