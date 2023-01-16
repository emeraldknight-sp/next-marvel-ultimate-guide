import Link from 'next/link';
import { BsLinkedin, BsDiscord, BsWhatsapp, BsInstagram } from 'react-icons/bs';

import Logo from './Logo';
import Container from './Container';

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
              <li>
                <Link href="/" target="_self" rel="noreferrer">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/" target="_self" rel="noreferrer">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/" target="_self" rel="noreferrer">
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.group_nav}>
          <h3>Sobre nós</h3>
          <nav>
            <ul>
              <li>
                <Link href="/" target="_self" rel="noreferrer">
                  Informações gerais
                </Link>
              </li>
              <li>
                <Link href="/" target="_self" rel="noreferrer">
                  Sobre o desenvolvimento
                </Link>
              </li>
              <li>
                <Link href="/" target="_self" rel="noreferrer">
                  Junte-se a nós
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.group_nav}>
          <h3>Suporte</h3>
          <nav>
            <ul>
              <li>
                <Link href="/" target="_self" rel="noreferrer">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" target="_self" rel="noreferrer">
                  Telefone
                </Link>
              </li>
              <li>
                <Link href="/" target="_self" rel="noreferrer">
                  Chat
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.group_nav}>
          <p>&copy; {currentYear} Copyright | David Almeida</p>
          <nav>
            <ul className={styles.links}>
              <li>
                <Link
                  href="https://www.linkedin.com/in/davidalmeidadev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/RUx9WxZ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsDiscord size={24} />
                </Link>
              </li>
              <li>
                <Link href="" target="_blank" rel="noreferrer">
                  <BsWhatsapp size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/davidalmeidadev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram size={24} />
                </Link>
              </li>
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
