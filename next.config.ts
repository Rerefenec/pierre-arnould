// const withPWA = require('next-pwa')({
//   dest: 'public',
//   disable: false, // Cambia esto a false
//   // process.env.NODE_ENV === 'development', // Desactiva en desarrollo
//   register: true,
//   skipWaiting: true,
// });

// module.exports = withPWA({
//   // Tu configuración existente
// });
// esta config es para build y no para dev


// next.config.ts
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Desactiva en desarrollo
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
});
// esta config es para dev y no build 
