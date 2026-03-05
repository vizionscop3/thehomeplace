import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Outreach - Backyard',
  description: 'Explore community outreach programs, volunteer opportunities, and ways to get involved with The Home Place.',
};

export default function OutreachPage() {
  return (
    <div className={styles.page}>
      {/* Room Header */}
      <section className={styles.roomHeader}>
        <div className="container">
          <span className={styles.roomLabel}>Backyard</span>
          <h1>Outreach</h1>
          <p className={styles.metaphor}>
            Reaching beyond the walls of the home and into the community
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className={`section ${styles.programs}`}>
        <div className="container">
          <h2>Our Programs</h2>
          <p className={styles.programsIntro}>
            We believe faith is lived out in service. Here&apos;s how we&apos;re making a difference.
          </p>
          <div className={styles.programsGrid}>
            <div className={`card ${styles.programCard}`}>
              <span className={styles.programIcon}>🍲</span>
              <h3>Community Kitchen</h3>
              <p>
                Weekly meal service providing nutritious food to those in need. 
                Join us every Saturday from 11 AM - 2 PM.
              </p>
              <a href="/contact" className="btn btn-secondary">
                Volunteer
              </a>
            </div>
            <div className={`card ${styles.programCard}`}>
              <span className={styles.programIcon}>📚</span>
              <h3>Youth Mentorship</h3>
              <p>
                Pairing young people with caring mentors for guidance, support, 
                and positive role modeling.
              </p>
              <a href="/contact" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            <div className={`card ${styles.programCard}`}>
              <span className={styles.programIcon}>🏠</span>
              <h3>Housing Assistance</h3>
              <p>
                Connecting families with resources for stable housing and 
                supporting those facing housing insecurity.
              </p>
              <a href="/contact" className="btn btn-secondary">
                Get Help
              </a>
            </div>
            <div className={`card ${styles.programCard}`}>
              <span className={styles.programIcon}>💚</span>
              <h3>Wellness Support</h3>
              <p>
                Mental health resources, support groups, and connections to 
                professional care for our community.
              </p>
              <a href="/contact" className="btn btn-secondary">
                Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className={`section ${styles.volunteer}`}>
        <div className="container">
          <div className={styles.volunteerContent}>
            <div className={styles.volunteerText}>
              <h2>Get Involved</h2>
              <p>
                There&apos;s a place for everyone who wants to serve. Whether you have 
                an hour a week or want to lead a program, we&apos;d love to have you.
              </p>
              <ul className={styles.volunteerList}>
                <li>Meal preparation and serving</li>
                <li>Youth mentoring and tutoring</li>
                <li>Administrative support</li>
                <li>Event planning and coordination</li>
                <li>Transportation assistance</li>
                <li>Skilled trades and maintenance</li>
              </ul>
              <a href="/contact" className="btn btn-primary">
                Sign Up to Volunteer
              </a>
            </div>
            <div className={styles.volunteerImage}>
              <div className={styles.imagePlaceholder}>
                Community Photo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={`section ${styles.partners}`}>
        <div className="container">
          <h2>Our Partners</h2>
          <p className={styles.partnersIntro}>
            We&apos;re grateful for the organizations that work alongside us.
          </p>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerLogo}>Partner 1</div>
            <div className={styles.partnerLogo}>Partner 2</div>
            <div className={styles.partnerLogo}>Partner 3</div>
            <div className={styles.partnerLogo}>Partner 4</div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className={`section ${styles.impact}`}>
        <div className="container">
          <h2>Our Impact</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Meals Served Monthly</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Active Volunteers</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Families Supported</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Youth Mentored</span>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className={`section ${styles.donate}`}>
        <div className="container">
          <div className={styles.donateContent}>
            <h2>Support Our Work</h2>
            <p>
              Your generosity makes our outreach possible. Every donation helps us 
              serve more people in our community.
            </p>
            <a href="/contact" className="btn btn-gold">
              Make a Donation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
