import { MdMenu } from 'react-icons/md';

import Container from './Container';
import Logo from './Logo';

import styles from '../styles/Header.module.css';

interface HeaderProps {
  setSidebarOpen?: () => void;
}

export default function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
        <button type="button" onClick={setSidebarOpen}>
          <MdMenu size={24} />
        </button>
      </Container>
    </header>
  );
}
