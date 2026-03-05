import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <span className={styles.divider} aria-hidden />
        <p className={styles.message}>This page could not be found.</p>
        <Link href="/" className={styles.homeLink}>
          Go to Front Porch (Home)
        </Link>
      </div>
    </div>
  );
}
