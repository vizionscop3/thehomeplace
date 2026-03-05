import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us - Living Room',
  description: 'Learn about The Home Place founders, our mission, values, and the inclusive philosophy that guides our multi-faith community.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Room Header */}
      <section className={styles.roomHeader}>
        <div className="container">
          <span className={styles.roomLabel}>Living Room</span>
          <h1>About Us</h1>
          <p className={styles.metaphor}>
            Where the family gathers to share their story and values
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className={`section ${styles.founders}`}>
        <div className="container">
          <h2>Our Founders</h2>
          <div className={styles.founderGrid}>
            <div className={`card ${styles.founderCard}`}>
              <div className={styles.founderImage}>
                <div className={styles.imagePlaceholder}>Photo</div>
              </div>
              <h3>Founder Name</h3>
              <p className={styles.founderRole}>Co-Founder</p>
              <p className={styles.founderBio}>
                A brief biography about the founder, their background, and what 
                inspired them to create The Home Place. Their vision for an 
                inclusive spiritual community that welcomes all.
              </p>
            </div>
            <div className={`card ${styles.founderCard}`}>
              <div className={styles.founderImage}>
                <div className={styles.imagePlaceholder}>Photo</div>
              </div>
              <h3>Founder Name</h3>
              <p className={styles.founderRole}>Co-Founder</p>
              <p className={styles.founderBio}>
                A brief biography about the founder, their spiritual journey, 
                and their commitment to building bridges across faith traditions. 
                Their heart for community and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className={`section ${styles.mission}`}>
        <div className="container">
          <h2>Our Mission</h2>
          <p className={styles.missionStatement}>
            The Home Place exists to create sacred space where people of all faiths, 
            backgrounds, and walks of life can come together in unity. We believe 
            that spiritual growth happens best in community, and that our differences 
            make us stronger when we approach them with love and respect.
          </p>

          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>🤝</span>
              <h4>Inclusivity</h4>
              <p>Every person is welcome, regardless of their faith tradition or background.</p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>💜</span>
              <h4>Unity</h4>
              <p>We celebrate what brings us together while honoring our differences.</p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>🌱</span>
              <h4>Growth</h4>
              <p>We support each person&apos;s spiritual journey wherever they are.</p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>🏠</span>
              <h4>Belonging</h4>
              <p>Everyone deserves a place to call home in their spiritual life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className={`section ${styles.philosophy}`}>
        <div className="container">
          <blockquote className={styles.philosophyQuote}>
            <p>
              &ldquo;We believe that the divine speaks through many voices and many 
              traditions. At The Home Place, we don&apos;t ask you to leave your faith 
              at the door — we ask you to bring it in and share it with us. Together, 
              we create something beautiful: a tapestry of belief woven with threads 
              of love, respect, and shared humanity.&rdquo;
            </p>
            <cite>— The Founders</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
