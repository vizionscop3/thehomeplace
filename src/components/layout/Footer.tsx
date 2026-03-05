import Link from 'next/link';
import { rooms } from '@/data/rooms';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <h3 className={styles.footerLogo}>The Home Place</h3>
            <p className={styles.tagline}>
              A sacred space for all people.<br />
              A digital home for every soul.
            </p>
          </div>

          <nav className={styles.footerNav} aria-label="Footer navigation">
            <h4>Explore</h4>
            <ul>
              {rooms.map((room) => (
                <li key={room.id}>
                  <Link href={room.path}>{room.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.footerContact}>
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} The Home Place. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
