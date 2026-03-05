import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services - Kitchen',
  description: 'Discover worship services, spiritual programs, and upcoming live streaming at The Home Place multi-faith community.',
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* Room Header */}
      <section className={styles.roomHeader}>
        <div className="container">
          <span className={styles.roomLabel}>Kitchen</span>
          <h1>Services</h1>
          <p className={styles.metaphor}>
            Where nourishment is prepared and shared for all who enter
          </p>
        </div>
      </section>

      {/* Service Schedule */}
      <section className={`section ${styles.schedule}`}>
        <div className="container">
          <h2>Worship Schedule</h2>
          <div className={styles.scheduleGrid}>
            <div className={`card ${styles.scheduleCard}`}>
              <div className={styles.scheduleDay}>Sunday</div>
              <h3>Weekly Worship Service</h3>
              <p className={styles.scheduleTime}>10:00 AM - 11:30 AM</p>
              <p>Our main gathering where we come together in song, reflection, and community. All are welcome.</p>
            </div>
            <div className={`card ${styles.scheduleCard}`}>
              <div className={styles.scheduleDay}>Wednesday</div>
              <h3>Midweek Prayer Circle</h3>
              <p className={styles.scheduleTime}>7:00 PM - 8:00 PM</p>
              <p>A quieter gathering for prayer, meditation, and spiritual connection in the middle of the week.</p>
            </div>
            <div className={`card ${styles.scheduleCard}`}>
              <div className={styles.scheduleDay}>First Saturday</div>
              <h3>Interfaith Dialogue</h3>
              <p className={styles.scheduleTime}>4:00 PM - 6:00 PM</p>
              <p>Monthly gathering exploring different faith traditions and finding common ground.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className={`section ${styles.serviceTypes}`}>
        <div className="container">
          <h2>What We Offer</h2>
          <div className={styles.typesGrid}>
            <div className={styles.typeCard}>
              <span className={styles.typeIcon}>🙏</span>
              <h3>Worship Services</h3>
              <p>Inclusive gatherings that honor multiple faith traditions through music, readings, and reflection.</p>
            </div>
            <div className={styles.typeCard}>
              <span className={styles.typeIcon}>📖</span>
              <h3>Study Groups</h3>
              <p>Small group discussions exploring sacred texts from various traditions.</p>
            </div>
            <div className={styles.typeCard}>
              <span className={styles.typeIcon}>🧘</span>
              <h3>Meditation & Contemplation</h3>
              <p>Guided practices for inner peace and spiritual centering.</p>
            </div>
            <div className={styles.typeCard}>
              <span className={styles.typeIcon}>🎵</span>
              <h3>Music & Arts</h3>
              <p>Creative expression through song, art, and movement as spiritual practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stream Section (Placeholder) */}
      <section className={`section ${styles.liveStream}`}>
        <div className="container">
          <h2>Watch Online</h2>
          <div className={styles.streamContainer}>
            <div className={styles.streamPlaceholder}>
              <span className={styles.comingSoon}>Coming Soon</span>
              <h3>Live Streaming Services</h3>
              <p>
                Soon you&apos;ll be able to join our services from anywhere in the world. 
                Sign up to be notified when we go live.
              </p>
              <form className={styles.notifyForm}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  aria-label="Email address for live stream notifications"
                />
                <button type="submit" className="btn btn-gold">
                  Notify Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Resources */}
      <section className={`section ${styles.resources}`}>
        <div className="container">
          <h2>Spiritual Resources</h2>
          <p className={styles.resourcesIntro}>
            Nourishment for your journey, wherever you are.
          </p>
          <div className={styles.resourcesGrid}>
            <div className={`card ${styles.resourceCard}`}>
              <h4>Daily Devotionals</h4>
              <p>Short reflections to start your day with intention.</p>
              <span className={styles.comingSoonSmall}>Coming Soon</span>
            </div>
            <div className={`card ${styles.resourceCard}`}>
              <h4>Reading Lists</h4>
              <p>Curated books from various spiritual traditions.</p>
              <span className={styles.comingSoonSmall}>Coming Soon</span>
            </div>
            <div className={`card ${styles.resourceCard}`}>
              <h4>Guided Meditations</h4>
              <p>Audio recordings for contemplative practice.</p>
              <span className={styles.comingSoonSmall}>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
