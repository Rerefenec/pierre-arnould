const withPWA = require('next-pwa')({
  dest: 'public',
  disable: false, // Cambia esto a false
  // process.env.NODE_ENV === 'development', // Desactiva en desarrollo
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // Tu configuración existente
});