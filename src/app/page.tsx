import FloorPlan from '@/components/floor-plan/FloorPlan';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Welcome to The Home Place</h1>
          <p className={styles.heroTagline}>
            A sacred space for all people.<br />
            A digital home for every soul.
          </p>
          <a href="#floor-plan" className="btn btn-primary">
            Explore Our Home
          </a>
        </div>
      </section>

      {/* Mission Preview */}
      <section className={`section ${styles.mission}`}>
        <div className="container">
          <h2>Our Mission</h2>
          <p className={styles.missionText}>
            The Home Place is a multi-faith worship community that welcomes people of all 
            religions, creeds, and races into a sacred space of unity. We believe that 
            every soul deserves a place to belong, to grow, and to connect with something 
            greater than themselves.
          </p>
        </div>
      </section>

      {/* Interactive Floor Plan */}
      <section id="floor-plan" className={`section ${styles.floorPlanSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Explore Our Home</h2>
          <p className={styles.sectionSubtitle}>
            Click on any room to learn more about what we offer
          </p>
          <FloorPlan />
        </div>
      </section>

      {/* Room Preview Grid */}
      <section className={`section ${styles.roomPreview}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What You&apos;ll Find Inside</h2>
          <div className={styles.previewGrid}>
            <div className={`card ${styles.previewCard}`}>
              <h3>Living Room</h3>
              <p>Learn about our founders, mission, and the values that guide our community.</p>
            </div>
            <div className={`card ${styles.previewCard}`}>
              <h3>Kitchen</h3>
              <p>Discover our worship services and spiritual nourishment programs.</p>
            </div>
            <div className={`card ${styles.previewCard}`}>
              <h3>Backyard</h3>
              <p>Explore our community outreach programs and volunteer opportunities.</p>
            </div>
            <div className={`card ${styles.previewCard}`}>
              <h3>Study</h3>
              <p>Connect with us directly through our contact forms and social channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events (Stub) */}
      <section className={`section ${styles.events}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Upcoming Gatherings</h2>
          <div className={styles.eventsList}>
            <div className={`card ${styles.eventCard}`}>
              <span className={styles.eventDate}>Sunday</span>
              <h4>Weekly Worship Service</h4>
              <p>Join us every Sunday at 10:00 AM for our inclusive worship gathering.</p>
            </div>
            <div className={`card ${styles.eventCard}`}>
              <span className={styles.eventDate}>Wednesday</span>
              <h4>Community Prayer Circle</h4>
              <p>A midweek moment of reflection and connection at 7:00 PM.</p>
            </div>
            <div className={`card ${styles.eventCard}`}>
              <span className={styles.eventDate}>Monthly</span>
              <h4>Interfaith Dialogue</h4>
              <p>First Saturday of each month - exploring unity across traditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Placeholder */}
      <section className={`section ${styles.social}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Join Our Community</h2>
          <p className={styles.sectionSubtitle}>
            Follow us on social media to stay connected
          </p>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Facebook
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              YouTube
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              TikTok
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
