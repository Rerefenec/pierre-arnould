// next.config.js (or .ts)
const withPWA = require('next-pwa')({
  dest: 'public',
  // Recommended: Disable PWA features during development
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // Your standard Next.js configuration goes here
  reactStrictMode: true,
  // ... other configs like images, output, etc.
});