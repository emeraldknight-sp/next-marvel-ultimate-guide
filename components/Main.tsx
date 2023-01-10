import styles from '../styles/Main.module.css';

interface MainProps {
  children: React.ReactElement;
}

export default function Main({ children }: MainProps) {
  return <main className={styles.main}>{children}</main>;
}
