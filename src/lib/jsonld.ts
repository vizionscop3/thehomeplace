/**
 * JSON-LD structured data for SEO
 */

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ReligiousOrganization',
  name: 'The Home Place',
  description: 'A multi-faith worship community that welcomes people of all religions, creeds, and races into a sacred space of unity.',
  url: 'https://thehomeplace.org',
  logo: 'https://thehomeplace.org/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Unity Street',
    addressLocality: 'Brooklyn',
    addressRegion: 'NY',
    postalCode: '11201',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-718-555-1234',
    contactType: 'customer service',
    email: 'hello@thehomeplace.org',
  },
  sameAs: [
    'https://instagram.com/thehomeplace',
    'https://facebook.com/thehomeplace',
    'https://youtube.com/thehomeplace',
    'https://tiktok.com/@thehomeplace',
  ],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Home Place',
  url: 'https://thehomeplace.org',
  description: 'A sacred space for all people. A digital home for every soul.',
  publisher: {
    '@type': 'Organization',
    name: 'The Home Place',
  },
};

export function generateEventJsonLd(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location || 'The Home Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Unity Street',
        addressLocality: 'Brooklyn',
        addressRegion: 'NY',
        postalCode: '11201',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'The Home Place',
      url: 'https://thehomeplace.org',
    },
  };
}
