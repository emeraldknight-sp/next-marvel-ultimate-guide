import Link from 'next/link';
import { MdClose } from 'react-icons/md';

import { optionsMenuSidebar } from '../mock/sidebar.mock.js';

import Logo from './Logo';

import styles from '../styles/Sidebar.module.css';

interface SidebarProps {
  sidebarOpen?: boolean;
  setSidebarOpen?: () => void;
}

export default function SiderbarMenu({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  return (
    <>
      <aside
        className={
          !sidebarOpen
            ? `${styles.sidebar}`
            : `${styles.sidebar} ${styles.active}`
        }
      >
        <div>
          <Logo />
          <button type="button" onClick={setSidebarOpen}>
            <MdClose size={24} />
          </button>
        </div>
        <nav>
          <ul>
            {optionsMenuSidebar.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  target="_self"
                  rel="noreferrer"
                  onClick={() => console.log('Link')}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
