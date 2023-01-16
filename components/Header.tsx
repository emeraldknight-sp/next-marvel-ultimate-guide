import { MdMenu } from 'react-icons/md';

import Container from './Container';
import Logo from './Logo';

import styles from '../styles/Header.module.css';
import { useState } from 'react';
import SiderbarMenu from './Sidebar';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = (): void => {
    console.log('Entrou como ', open);
    setOpen(!open);
    console.log('Saiu como ', !open);
  };

  return (
    <header className={styles.header}>
      <SiderbarMenu sidebarOpen={open} setSidebarOpen={handleOpenMenu} />
      <Container>
        <Logo />
        <button type="button" onClick={handleOpenMenu}>
          <MdMenu size={24} />
        </button>
      </Container>
    </header>
  );
}
