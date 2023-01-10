import styles from '../styles/Container.module.css';

interface ContainerProps {
  children: React.ReactElement;
}

export default function Container({ children }: ContainerProps) {
  return <section className={styles.container}>{children}</section>;
}
