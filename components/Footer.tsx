import Link from 'next/link';
// import { BsLinkedin, BsDiscord, BsWhatsapp, BsInstagram } from 'react-icons/bs';

import Logo from './Logo';
import Container from './Container';

import { footer } from '../mock/footer.mock';

import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.group_nav}>
          <h3>Início</h3>
          <nav>
            <ul>
              {footer.getStarted.map((item) => (
                <li key={item.id}>
                  <Link href={item.url} target="_self" rel="noreferrer">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.group_nav}>
          <h3>Sobre nós</h3>
          <nav>
            <ul>
              {footer.about.map((item) => (
                <li key={item.id}>
                  <Link href={item.url} target="_self" rel="noreferrer">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.group_nav}>
          <h3>Suporte</h3>
          <nav>
            <ul>
              {footer.support.map((item) => (
                <li key={item.id}>
                  <Link href={item.url} target="_self" rel="noreferrer">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.group_nav}>
          <p>&copy; {currentYear} Copyright | David Almeida</p>
          <nav>
            <ul className={styles.links}>
              {footer.contact.map((item) => (
                <li key={item.id}>
                  <Link href={item.url} target="_blank" rel="noreferrer">
                    <span className={item.icon}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.copyright}>
            <Logo size={15} />
            <span>
              Todos os personagens da Marvel e suas semelhanças distintivas são
              marcas registradas e direitos autorais © 1939–
              {currentYear} Marvel Characters, Inc. Todos os direitos
              reservados.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
