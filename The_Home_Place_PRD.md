# The Home Place — Interactive Floor Plan Website

## Product Requirements Document

**Version:** 1.0
**Date:** March 2026
**Prepared by:** Vizion Digital Solutions
**Tagline:** *A sacred space for all people. A digital home for every soul.*

---

## 1. Executive Summary

The Home Place is a multi-faith worship community that welcomes people of all religions, creeds, and races into a sacred space of unity. This PRD defines the requirements for an innovative, interactive website that reimagines digital navigation as a journey through a home, using a 2D architectural blueprint-style floor plan as its primary navigation interface.

Visitors will enter the virtual Home Place through a front door and explore rooms that correspond to key content areas. Each room is designed to reflect the warmth, inclusivity, and spiritual depth that the founders bring to their physical ministry. The platform will be built for social media shareability and will include a technical foundation for future live streaming services.

---

## 2. Vision and Objectives

### 2.1 Vision Statement

To create a digital home that feels as welcoming as a physical one, where every visitor can explore, connect, and find community regardless of their background or beliefs.

### 2.2 Core Objectives

- **Interactive Navigation:** Replace traditional menu-based navigation with a clickable 2D blueprint floor plan that invites exploration and creates a memorable user experience.
- **Modern and Welcoming Aesthetic:** Use subtle tones of the brand colors (sage green, muted purple, and soft gold) to create a warm, calming atmosphere that feels inclusive and sacred without being tied to any single tradition.
- **Social Media Integration:** Deep integration with Instagram, Facebook, YouTube, and TikTok for content sharing, feeds, and cross-platform engagement.
- **Marketing-Ready Design:** Every page and interaction is designed to be screenshot-worthy, shareable, and optimized for social media marketing.
- **Live Streaming Foundation:** Architect the platform so that live streaming services can be integrated seamlessly in a future phase.
- **Mobile-First Experience:** Ensure the floor plan and all interactions are fully responsive and intuitive on mobile devices.

---

## 3. Room-to-Page Architecture

The website is structured as a home, with each room mapping to a content section. The floor plan serves as both the site map and the primary navigation tool.

| Room | Page | Purpose | Metaphor |
|------|------|---------|----------|
| Front Porch / Entryway | Home | Welcome, first impression, hero content, mission statement preview | The front of the house where you are greeted and welcomed in |
| Living Room | About Us | Founders story, mission, values, leadership team, faith philosophy | Where the family gathers to share their story and values |
| Kitchen | Services | Worship schedule, service types, spiritual nourishment programs, future live stream hub | Where nourishment is prepared and shared for all who enter |
| Backyard | Outreach | Community programs, partnerships, volunteer opportunities, events calendar | Reaching beyond the walls of the home and into the community |
| Study / Office | Contact Us | Contact form, location map, phone, email, social links, prayer request form | A quiet space for personal connection and correspondence |

### 3.1 Floor Plan Navigation Behavior

- **Hover State:** When a user hovers over a room on the blueprint, the room gently illuminates in the corresponding brand color with a soft glow effect and displays the room/page name as a tooltip.
- **Click Action:** Clicking a room triggers a smooth transition animation (a subtle door-opening or zoom-in effect) and loads the corresponding page content.
- **Active State:** The room the user is currently viewing remains highlighted on the floor plan, which persists as a mini-navigation element.
- **Mobile Adaptation:** On mobile, the floor plan becomes a vertically scrollable illustrated layout with rooms stacked and clearly tappable, with each room as a card-style element.

### 3.2 Floor Plan Technical Implementation

The floor plan should be built as an **inline SVG** with the following structure:

```
floor-plan.svg
├── <g id="room-entryway">   → Home page
├── <g id="room-living">     → About Us
├── <g id="room-kitchen">    → Services
├── <g id="room-backyard">   → Outreach
├── <g id="room-study">      → Contact Us
├── <g id="walls">           → Blueprint structural lines
└── <g id="labels">          → Room name labels
```

Each room group (`<g>`) must contain a clickable hit area (`<rect>` or `<path>`) and a decorative layer for the blueprint illustration. SVG should use `viewBox` for responsive scaling. CSS transitions handle hover glow and active states. JavaScript (or React event handlers) manage click routing.

---

## 4. Page Detail Specifications

### 4.1 Front Porch — Home Page

The home page is the digital front porch — the first thing visitors see and the moment that sets the tone for their entire experience.

**Content Elements:**

- **Hero Section:** Full-width welcoming visual with animated text overlay introducing The Home Place tagline and a CTA to explore the home (enter the floor plan).
- **Mission Preview:** A brief, warm statement about the inclusive philosophy of The Home Place, limited to 2–3 sentences.
- **Room Preview Cards:** Thumbnail-style preview of each room/section with hover animations, giving visitors a taste of what awaits inside.
- **Social Feed Integration:** A live-updating feed pulling recent posts from Instagram and Facebook to show the vibrant community life.
- **Upcoming Events Widget:** A compact display of the next 2–3 events or services.

**Component Structure:**

```
HomePage
├── HeroSection
│   ├── BackgroundImage / Video
│   ├── WelcomeText (animated)
│   └── ExploreButton → scrolls to FloorPlan
├── FloorPlanNav (full interactive SVG)
├── MissionPreview
├── RoomPreviewGrid
│   ├── RoomCard (x5)
├── SocialFeedSection
│   ├── InstagramFeed
│   └── FacebookFeed
└── UpcomingEventsWidget
```

### 4.2 Living Room — About Us

The living room is where the family shares its story. This is the heart of the site, where visitors learn who the founders are and what drives their mission.

**Content Elements:**

- **Founders Section:** Photo and bio of each founder with personal testimonial or vision statement. Designed as warm portrait-style cards.
- **Mission and Values:** Detailed articulation of the inclusive, multi-faith mission with visual iconography representing unity.
- **Philosophy Statement:** A space for the founders to express their spiritual philosophy in their own words, presented as a featured quote or scrolling text area.
- **Timeline or Story Arc:** Optional visual timeline showing the journey from vision to reality.

**Component Structure:**

```
AboutPage
├── RoomHeader (Living Room themed)
├── FoundersSection
│   ├── FounderCard (photo, bio, testimonial)
├── MissionAndValues
│   ├── ValueIcon (x4-6, universal spiritual symbols)
├── PhilosophyStatement (featured quote block)
└── Timeline (optional, scrollable)
```

### 4.3 Kitchen — Services

The kitchen is where spiritual nourishment is prepared and served. This section details all worship services and spiritual programming.

**Content Elements:**

- **Service Schedule:** Clear, well-designed calendar or schedule display showing regular and special services.
- **Service Descriptions:** Cards for each type of service offered with descriptions of what visitors can expect.
- **Live Stream Placeholder:** A prominently placed section with a "coming soon" badge that will later house embedded live streaming video for virtual worship attendance.
- **Spiritual Resources:** Links or downloadable content such as devotionals, reading lists, or guided meditations.
- **Media Gallery:** Photos and short video clips from past services to give new visitors a feel for the experience.

**Component Structure:**

```
ServicesPage
├── RoomHeader (Kitchen themed)
├── ServiceSchedule
│   ├── ScheduleCard (day, time, type)
├── ServiceDescriptions
│   ├── ServiceCard (title, description, icon)
├── LiveStreamSection
│   ├── VideoContainer (placeholder → future embed)
│   ├── ComingSoonBadge
│   └── NotifyMeButton (email signup)
├── SpiritualResources
│   ├── ResourceCard (downloadable)
└── MediaGallery
    ├── PhotoGrid
    └── VideoThumbnails (YouTube embeds)
```

### 4.4 Backyard — Outreach

The backyard represents reaching beyond the walls of the home. This section highlights community engagement and impact.

**Content Elements:**

- **Community Programs:** Detailed cards for each outreach initiative with descriptions, photos, and impact metrics where available.
- **Volunteer Signup:** Interactive form to sign up for volunteer opportunities, integrated with email notifications.
- **Partner Organizations:** Logos and descriptions of partner organizations and community collaborators.
- **Events Calendar:** Full calendar view of upcoming outreach events, workshops, and community gatherings.
- **Impact Stories:** Testimonials and stories from community members who have been touched by the outreach programs.

**Component Structure:**

```
OutreachPage
├── RoomHeader (Backyard themed)
├── CommunityPrograms
│   ├── ProgramCard (description, photo, metrics)
├── VolunteerSignup
│   ├── SignupForm (name, email, interest area)
├── PartnerOrganizations
│   ├── PartnerLogo + Description
├── EventsCalendar
│   ├── CalendarView (month/list toggle)
│   ├── EventCard (date, title, location, RSVP)
└── ImpactStories
    ├── TestimonialCard (quote, photo, name)
```

### 4.5 Study — Contact Us

The study is a quiet, personal space for direct communication with The Home Place leadership.

**Content Elements:**

- **Contact Form:** Clean, accessible form with fields for name, email, subject, and message. Includes a dropdown for inquiry type (general, prayer request, volunteer interest, partnership).
- **Prayer Request Form:** A dedicated, private form for submitting prayer requests with an option for confidentiality.
- **Location and Map:** Embedded map showing the physical location with directions and parking information.
- **Direct Contact Info:** Phone number, email address, and office hours displayed clearly.
- **Social Media Links:** Prominent icons linking to all active social media platforms.

**Component Structure:**

```
ContactPage
├── RoomHeader (Study themed)
├── ContactForm
│   ├── NameField
│   ├── EmailField
│   ├── InquiryTypeDropdown
│   ├── SubjectField
│   ├── MessageTextarea
│   └── SubmitButton
├── PrayerRequestForm
│   ├── RequestTextarea
│   ├── ConfidentialToggle
│   └── SubmitButton
├── LocationMap (embedded Google Maps or Mapbox)
├── DirectContactInfo
│   ├── Phone, Email, Hours
└── SocialMediaLinks
    ├── Instagram, Facebook, YouTube, TikTok icons
```

---

## 5. Brand and Design System

### 5.1 Color Palette

| Color | Hex | CSS Variable | Tone | Usage |
|-------|-----|-------------|------|-------|
| Sage Green | `#4A7C59` | `--color-green` | Subtle, earthy | Primary accents, navigation highlights, growth/outreach elements |
| Sage Green Light | `#E8F0E9` | `--color-green-light` | Soft background | Card backgrounds, hover states for green elements |
| Muted Purple | `#6B5B7B` | `--color-purple` | Spiritual, calm | Headings, spiritual content areas, primary brand identity |
| Muted Purple Light | `#EDE8F0` | `--color-purple-light` | Soft background | Section backgrounds, highlighted areas |
| Soft Gold | `#B8960C` | `--color-gold` | Warm, inviting | Dividers, CTAs, hover states, highlights and accents |
| Soft Gold Light | `#F5F0E0` | `--color-gold-light` | Warm background | Featured content backgrounds, badges |
| Warm White | `#F9F8F6` | `--color-bg` | Clean, open | Page backgrounds, content areas, breathing space |
| Charcoal | `#2C2C2C` | `--color-dark` | Grounded, legible | Body text, floor plan outlines, structural elements |
| Medium Gray | `#555555` | `--color-medium` | Supporting | Secondary text, captions |
| Light Gray | `#888888` | `--color-light` | Subtle | Tertiary text, metadata, timestamps |

**CSS Custom Properties:**

```css
:root {
  --color-green: #4A7C59;
  --color-green-light: #E8F0E9;
  --color-purple: #6B5B7B;
  --color-purple-light: #EDE8F0;
  --color-gold: #B8960C;
  --color-gold-light: #F5F0E0;
  --color-bg: #F9F8F6;
  --color-dark: #2C2C2C;
  --color-medium: #555555;
  --color-light: #888888;
  --color-white: #FFFFFF;

  --font-heading: 'Georgia', 'Times New Roman', serif;
  --font-body: 'Arial', 'Helvetica Neue', sans-serif;

  --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.1);
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --transition-default: all 0.3s ease;
}
```

### 5.2 Typography

- **Headings:** Georgia or a similar serif font to convey warmth, tradition, and trust.
- **Body Text:** Arial or a clean sans-serif for readability and modern feel.
- **Accent/Quotes:** An elegant script or italic serif for featured quotes and spiritual statements.

**Type Scale:**

```css
h1 { font-family: var(--font-heading); font-size: 2.5rem; color: var(--color-purple); }
h2 { font-family: var(--font-heading); font-size: 1.75rem; color: var(--color-green); }
h3 { font-family: var(--font-heading); font-size: 1.25rem; color: var(--color-gold); }
body { font-family: var(--font-body); font-size: 1rem; color: var(--color-dark); line-height: 1.6; }
.caption { font-size: 0.875rem; color: var(--color-medium); }
.quote { font-family: var(--font-heading); font-style: italic; color: var(--color-purple); }
```

### 5.3 Design Principles

- **Subtle Over Loud:** Colors are muted and calming, never overwhelming. The palette should feel like natural light in a well-loved home.
- **Inclusive Imagery:** All photos and illustrations should reflect diversity in race, age, ability, and faith traditions. No imagery should favor one religion over another.
- **Architectural Consistency:** The 2D blueprint aesthetic should carry through subtly in design elements such as thin-line dividers, blueprint-style fonts for labels, and room-shaped content containers.
- **Whitespace as Welcome:** Generous spacing to create a sense of openness and rest, mirroring the welcoming atmosphere of a comfortable home.

---

## 6. Social Media Integration Strategy

Social media is central to The Home Place's growth and community engagement. The website must function as a social media hub and content engine.

### 6.1 Platform Integration Details

| Platform | Website Integration | Marketing Features |
|----------|--------------------|--------------------|
| Instagram | Live feed embed on Home page, story highlights on About page, shoppable/linkable post grid | Share buttons on every page, Instagram-optimized OG images, story-friendly vertical content blocks |
| Facebook | Events sync with Outreach calendar, community group integration, review/testimonial pull | Facebook Share and Like buttons, event auto-posting, Open Graph meta tags for rich link previews |
| YouTube | Embedded video gallery on Services page, sermon/message archive, future live stream integration | Video thumbnail cards, subscribe CTA, playlist embedding for themed content series |
| TikTok | Short-form video feed on Home or About page, behind-the-scenes content showcase | TikTok share links, vertical-video-friendly page layouts, trending sound integration for shareability |

### 6.2 Social Shareability Requirements

- **Open Graph and Twitter Card Meta Tags:** Every page must have fully configured OG tags with custom images sized for each platform.
- **Screenshot-Ready Design:** Key sections should be visually striking when screenshotted and shared, particularly quotes, event announcements, and the floor plan itself.
- **Share Buttons:** Floating or contextual share buttons on every content page allowing one-click sharing to all four platforms.
- **QR Code Generation:** Ability to generate QR codes for specific pages or events for use in physical marketing materials.

**OG Tag Template (per page):**

```html
<meta property="og:title" content="The Home Place — [Room Name]" />
<meta property="og:description" content="[Room-specific description]" />
<meta property="og:image" content="/images/og/[room-name]-og.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://thehomeplace.org/[page]" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## 7. Live Streaming Readiness (Future Phase)

While live streaming is not part of the initial launch, the architecture must be designed to accommodate it without major restructuring.

### 7.1 Technical Foundation

- **Designated Streaming Area:** The Kitchen (Services) page will include a prominently placed video container that initially displays a branded "coming soon" message and will later house the embedded live stream player.
- **Platform Compatibility:** The system should be designed to embed streams from YouTube Live, Facebook Live, or a dedicated streaming service.
- **Chat and Interaction Layer:** Reserve space in the UI design for a future live chat sidebar that will allow virtual attendees to interact during services.
- **Archive Integration:** Once streaming begins, recorded services should automatically populate a media archive accessible from the Services page.
- **Notification System:** Plan for push notification or email alert functionality to notify subscribers when a live stream is about to begin.

### 7.2 Live Stream Component Placeholder

```
LiveStreamSection
├── VideoContainer
│   ├── state: "coming-soon" | "scheduled" | "live" | "archived"
│   ├── ComingSoonOverlay (Phase 1)
│   ├── VideoPlayer (Phase 5 — YouTube/Facebook embed or custom)
│   └── ArchiveGrid (Phase 5 — past recordings)
├── ChatSidebar (Phase 5)
│   ├── ChatMessages
│   └── ChatInput
└── NotificationSignup
    ├── EmailInput
    └── SubscribeButton
```

---

## 8. Technical Requirements

### 8.1 Performance Standards

- **Page Load Time:** Under 3 seconds on 4G mobile connections.
- **Floor Plan Rendering:** SVG-based interactive floor plan for crisp scaling at all screen sizes with smooth animations at 60fps.
- **Accessibility:** WCAG 2.1 AA compliance. All rooms must be keyboard-navigable with proper ARIA labels and screen reader support.
- **Browser Support:** Full support for Chrome, Safari, Firefox, and Edge (latest 2 versions). Graceful degradation for older browsers.

### 8.2 Responsive Design Breakpoints

| Device | Width | Floor Plan View | Navigation |
|--------|-------|----------------|------------|
| Mobile | 320–767px | Stacked room cards with blueprint styling | Hamburger menu with room icons |
| Tablet | 768–1023px | Simplified floor plan, tappable rooms | Compact floor plan nav |
| Desktop | 1024px+ | Full interactive blueprint with hover effects | Full floor plan always visible |

### 8.3 Technology Recommendations

- **Frontend Framework:** React or Next.js for component-based architecture and SEO optimization.
- **Floor Plan Engine:** Inline SVG with CSS animations and JavaScript event handlers, or React Spring for fluid transitions.
- **CMS Integration:** Headless CMS (Sanity, Contentful, or Strapi) so founders can update content independently.
- **Hosting:** Vercel or Netlify for fast global deployment with built-in analytics.
- **Analytics:** Google Analytics 4 with custom events tracking room clicks, page depth, and social shares.

### 8.4 SEO Requirements

- Server-side rendering (SSR) or static site generation (SSG) for all pages.
- Semantic HTML5 with proper heading hierarchy.
- Structured data (JSON-LD) for organization, events, and local business.
- Sitemap.xml and robots.txt configured.
- Canonical URLs on all pages.

### 8.5 Accessibility (WCAG 2.1 AA)

- All interactive floor plan rooms must have `role="button"`, `tabindex="0"`, and `aria-label="Navigate to [Room Name]"`.
- Color contrast ratios must meet 4.5:1 for body text and 3:1 for large text.
- All images must have descriptive `alt` text.
- Forms must have associated labels and clear error messaging.
- A skip-to-content link must be provided for keyboard users.
- The floor plan must have a text-based navigation fallback for screen readers.

---

## 9. User Personas

### 9.1 First-Time Visitor

A person discovering The Home Place through social media or a friend's recommendation. They are curious but may be cautious about organized religion. They need to feel welcomed immediately and understand that this is a safe, inclusive space. The floor plan navigation should delight and intrigue them, encouraging exploration.

**Primary paths:** Home → About Us → Services
**Key need:** Welcoming first impression, clear inclusive messaging

### 9.2 Returning Community Member

An active participant who visits the site regularly for service schedules, event information, and community updates. They want quick access to the Kitchen (Services) and Backyard (Outreach) and will share content on their own social media. They value the familiar home metaphor and navigate efficiently.

**Primary paths:** Home → Services, Home → Outreach
**Key need:** Quick access to schedules and events

### 9.3 Community Partner or Organization

A leader from a partner organization or potential collaborator who needs to understand the mission and find outreach/partnership information. They will primarily visit the Living Room (About Us) and Backyard (Outreach) and may use the Study (Contact Us) to reach out.

**Primary paths:** About Us → Outreach → Contact Us
**Key need:** Clear mission info and easy contact

### 9.4 Social Media Follower

Someone who follows The Home Place on Instagram or TikTok and clicks through to the website. They expect a visually consistent experience, fast loading, and easy ability to share content back to their own social platforms.

**Primary paths:** Social link → any room → share back to social
**Key need:** Visual consistency with social presence, fast load, easy sharing

---

## 10. Success Metrics

| Metric | Target (6 Months) | Measurement | Tool |
|--------|-------------------|-------------|------|
| Monthly Unique Visitors | 1,000+ | Monthly | Google Analytics |
| Average Session Duration | 2+ minutes | Monthly | Google Analytics |
| Floor Plan Interaction Rate | 60% of visitors click a room | Weekly | Custom event tracking |
| Social Media Referral Traffic | 30% of total traffic | Monthly | UTM tracking |
| Contact Form Submissions | 20+ monthly | Monthly | Form analytics |
| Social Shares from Site | 50+ monthly | Monthly | Share button tracking |
| Mobile Bounce Rate | Under 40% | Monthly | Google Analytics |

---

## 11. Implementation Timeline

| Phase | Duration | Deliverables | Milestone |
|-------|----------|-------------|-----------|
| Phase 1: Design | Weeks 1–3 | Brand system finalization, floor plan illustration, wireframes for all 5 rooms, mobile layout design | Design approval from founders |
| Phase 2: Core Build | Weeks 4–7 | Interactive SVG floor plan, all 5 page templates, responsive framework, CMS integration | Functional prototype review |
| Phase 3: Social & Content | Weeks 8–9 | Social media feed integration, share functionality, OG tags, content population | Social features QA complete |
| Phase 4: Testing & Launch | Weeks 10–12 | Cross-browser testing, accessibility audit, performance optimization, SEO setup, soft launch | Public launch |
| Phase 5: Live Stream | TBD (Post-Launch) | Live stream player integration, chat functionality, notification system, media archive | First live streamed service |

---

## 12. Risks and Mitigations

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Floor plan is confusing on mobile | Medium | Design mobile-first with stacked room cards as fallback. Conduct user testing with diverse audiences early in Phase 1. |
| Social API changes break integrations | Medium | Use established embedding standards and third-party aggregators. Design with graceful fallback if feeds fail to load. |
| Content feels exclusionary to certain faiths | Low | Establish content review guidelines with diverse advisory input. Use universal spiritual language and imagery. |
| Live stream integration requires major refactor | Low | Pre-build the video container and layout placeholders in Phase 2 so the streaming player is a drop-in addition. |
| Low initial traffic and engagement | Medium | Launch with a social media campaign. Use QR codes in physical spaces. Create shareable launch content for all 4 platforms. |

---

## 13. Project File Structure

```
the-home-place/
├── public/
│   ├── images/
│   │   ├── og/                  # Open Graph images per room
│   │   ├── founders/            # Founder photos
│   │   ├── gallery/             # Service and event photos
│   │   └── partners/            # Partner organization logos
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MiniFloorPlan.jsx      # Persistent nav element
│   │   │   └── Layout.jsx
│   │   ├── floor-plan/
│   │   │   ├── FloorPlan.jsx          # Main interactive SVG
│   │   │   ├── Room.jsx               # Individual room component
│   │   │   ├── RoomTooltip.jsx
│   │   │   └── floor-plan.svg         # Base SVG artwork
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── MissionPreview.jsx
│   │   │   ├── RoomPreviewGrid.jsx
│   │   │   ├── SocialFeedSection.jsx
│   │   │   └── UpcomingEvents.jsx
│   │   ├── about/
│   │   │   ├── FounderCard.jsx
│   │   │   ├── MissionValues.jsx
│   │   │   ├── PhilosophyStatement.jsx
│   │   │   └── Timeline.jsx
│   │   ├── services/
│   │   │   ├── ServiceSchedule.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── LiveStreamSection.jsx
│   │   │   ├── SpiritualResources.jsx
│   │   │   └── MediaGallery.jsx
│   │   ├── outreach/
│   │   │   ├── ProgramCard.jsx
│   │   │   ├── VolunteerSignup.jsx
│   │   │   ├── PartnerLogos.jsx
│   │   │   ├── EventsCalendar.jsx
│   │   │   └── ImpactStories.jsx
│   │   ├── contact/
│   │   │   ├── ContactForm.jsx
│   │   │   ├── PrayerRequestForm.jsx
│   │   │   ├── LocationMap.jsx
│   │   │   └── SocialLinks.jsx
│   │   └── shared/
│   │       ├── ShareButtons.jsx
│   │       ├── QRCodeGenerator.jsx
│   │       ├── RoomHeader.jsx
│   │       └── Card.jsx
│   ├── pages/
│   │   ├── index.jsx              # Home (Front Porch)
│   │   ├── about.jsx              # About Us (Living Room)
│   │   ├── services.jsx           # Services (Kitchen)
│   │   ├── outreach.jsx           # Outreach (Backyard)
│   │   └── contact.jsx            # Contact Us (Study)
│   ├── styles/
│   │   ├── globals.css            # CSS variables, resets
│   │   ├── floor-plan.css         # Floor plan animations
│   │   └── typography.css
│   ├── lib/
│   │   ├── cms.js                 # Headless CMS client
│   │   ├── analytics.js           # GA4 custom events
│   │   └── social.js              # Social feed fetchers
│   └── data/
│       └── rooms.js               # Room metadata and mappings
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

---

## 14. Approval and Next Steps

This PRD requires approval from The Home Place founders before design and development work begins. Upon approval, the following immediate next steps will be initiated:

1. Schedule a kickoff meeting to discuss content priorities and gather founder assets (photos, bios, statements).
2. Begin floor plan illustration and design system buildout (Phase 1).
3. Set up project management tooling and communication channels.
4. Confirm social media account access for integration work.

---

| Approval | Date / Signature |
|----------|-----------------|
| Founder 1 | _________________________ |
| Founder 2 | _________________________ |
| Developer (Vizion) | _________________________ |
