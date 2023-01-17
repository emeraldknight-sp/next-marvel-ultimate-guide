import { useState } from 'react';
import { MdMenu } from 'react-icons/md';

import Container from './Container';
import Logo from './Logo';
import SiderbarMenu from './Sidebar';

import styles from '../styles/Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = (): void => setOpen(!open);

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
