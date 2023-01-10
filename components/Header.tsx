import Image from 'next/image';
import { HiMenuAlt2 } from 'react-icons/hi';

import Container from './Container';
import styles from '../styles/Header.module.css';

import Logo from '../public/images/marvel-avenger.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <>
          <div>
            <figure>
              <Image src={Logo} width="35" height="35" alt="Logo" />
            </figure>
            <h1>Marvel: Ultimate Guide</h1>
          </div>
          <button type="button">
            <HiMenuAlt2 size={24} />
          </button>
        </>
      </Container>
    </header>
  );
}
