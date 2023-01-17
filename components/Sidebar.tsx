import Link from 'next/link';
import { MdClose } from 'react-icons/md';

import styles from '../styles/Sidebar.module.css';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: () => void;
}

export default function SiderbarMenu({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  return (
    <div className={styles.blocker}>
      <div
        className={
          !sidebarOpen
            ? `${styles.sidebar}`
            : `${styles.sidebar} ${styles.active}`
        }
      >
        <div>
          <h3>MENU</h3>
          <button type="button" onClick={setSidebarOpen}>
            <MdClose size={24} />
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                href="https://www.google.com/"
                target="_self"
                rel="noreferrer"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/" target="_self" rel="noreferrer">
                Shortcuts
              </Link>
            </li>
            <li>
              <Link href="/" target="_self" rel="noreferrer">
                Services
              </Link>
            </li>
            <li>
              <Link href="/" target="_self" rel="noreferrer">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/" target="_self" rel="noreferrer">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" target="_self" rel="noreferrer">
                Events
              </Link>
            </li>
            <li>
              <Link href="/" target="_self" rel="noreferrer">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {!sidebarOpen ? '' : <span></span>}
    </div>
  );
}
