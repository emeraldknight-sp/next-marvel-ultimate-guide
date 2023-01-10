import Image from 'next/image';
import Link from 'next/link';

import MarvelLogo from '../public/images/marvel-avenger.png';

import styles from '../styles/Logo.module.css';

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 35 }: LogoProps) {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <figure>
          <Image src={MarvelLogo} width={size} height={size} alt="Logo" />
        </figure>

        {size === 35 ? (
          <h1>Marvel: Ultimate Guide</h1>
        ) : (
          <span>Marvel: Ultimate Guide</span>
        )}
      </Link>
    </div>
  );
}
