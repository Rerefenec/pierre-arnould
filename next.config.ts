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
  // Provide an explicit (possibly empty) turbopack config to avoid the
  // "webpack config with no turbopack config" error introduced in Next.js 16
  // (Turbopack is enabled by default in Next 16; your PWA plugin may add a webpack config).
  turbopack: {},
  // ... other configs like images, output, etc.
});