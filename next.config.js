/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['upcdn.io', 'replicate.delivery', 'lh3.googleusercontent.com']
  },
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'es'
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Nutlope/roomGPT',
        permanent: false
      },
      {
        source: '/deploy',
        destination: 'https://vercel.com/templates/next.js/room-GPT',
        permanent: false
      }
    ];
  }
};
