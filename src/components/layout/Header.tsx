'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { rooms } from '@/data/rooms';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>The Home Place</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {rooms.map((room) => (
            <Link
              key={room.id}
              href={room.path}
              className={`${styles.navLink} ${pathname === room.path ? styles.active : ''}`}
            >
              {room.name}
            </Link>
          ))}
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.menuIcon}></span>
        </button>

        {mobileMenuOpen && (
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {rooms.map((room) => (
              <Link
                key={room.id}
                href={room.path}
                className={`${styles.mobileNavLink} ${pathname === room.path ? styles.active : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {room.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
