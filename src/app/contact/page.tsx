import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us - Study',
  description: 'Get in touch with The Home Place. Contact us for inquiries, prayer requests, volunteer opportunities, or to learn more about our community.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      {/* Room Header */}
      <section className={styles.roomHeader}>
        <div className="container">
          <span className={styles.roomLabel}>Study</span>
          <h1>Contact Us</h1>
          <p className={styles.metaphor}>
            A quiet space for personal connection and correspondence
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2>Send Us a Message</h2>
              <p className={styles.formIntro}>
                We&apos;d love to hear from you. Fill out the form below and we&apos;ll 
                get back to you as soon as possible.
              </p>
              <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Enter your name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="Enter your email"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="services">Service Information</option>
                    <option value="outreach">Outreach Programs</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <div className={`card ${styles.infoCard}`}>
                <h3>Visit Us</h3>
                <p>
                  123 Unity Street<br />
                  Brooklyn, NY 11201
                </p>
              </div>
              <div className={`card ${styles.infoCard}`}>
                <h3>Service Times</h3>
                <p>
                  Sunday Worship: 10:00 AM<br />
                  Wednesday Prayer: 7:00 PM
                </p>
              </div>
              <div className={`card ${styles.infoCard}`}>
                <h3>Get in Touch</h3>
                <p>
                  <a href="mailto:hello@thehomeplace.org">hello@thehomeplace.org</a><br />
                  <a href="tel:+17185551234">(718) 555-1234</a>
                </p>
              </div>
              <div className={`card ${styles.infoCard}`}>
                <h3>Follow Us</h3>
                <div className={styles.socialLinks}>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request Section */}
      <section className={`section ${styles.prayerSection}`}>
        <div className="container">
          <div className={styles.prayerContent}>
            <h2>Prayer Requests</h2>
            <p>
              We believe in the power of prayer. If you have a prayer request, 
              we&apos;d be honored to lift you up. Your request will be held in 
              confidence and prayed over by our community.
            </p>
            <p className={styles.prayerNote}>
              Select &quot;Prayer Request&quot; in the contact form above, or reach out 
              directly to our prayer team.
            </p>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          <span>Map Coming Soon</span>
          <p>123 Unity Street, Brooklyn, NY 11201</p>
        </div>
      </section>
    </div>
  );
}
