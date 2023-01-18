import styles from '../styles/Blocker.module.css';

interface BlockerWrapperProps {
  children?: React.ReactElement[] | React.ReactElement;
}

export default function BlockerWrapper({ children }: BlockerWrapperProps) {
  return <div className={styles.blocker_wrapper}>{children}</div>;
}
