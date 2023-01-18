import { useState } from 'react';
import { MdMenu } from 'react-icons/md';

import Blocker from './Blocker';
import BlockerWrapper from './BlockerWrapper';
import Container from './Container';
import Logo from './Logo';
import SiderbarMenu from './Sidebar';

import styles from '../styles/Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => setOpen(!open);

  return (
    <header className={styles.header}>
      <BlockerWrapper>
        <SiderbarMenu sidebarOpen={open} setSidebarOpen={handleOpenMenu} />
        {!open ? <></> : <Blocker />}
      </BlockerWrapper>
      <Container>
        <Logo />
        <button type="button" onClick={handleOpenMenu}>
          <MdMenu size={24} />
        </button>
      </Container>
    </header>
  );
}
