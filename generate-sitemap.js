const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your routes manually based on your App.js structure
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },          // Home
  { url: '/about', changefreq: 'monthly', priority: 0.8 },   // AboutPage
  { url: '/request-service', changefreq: 'monthly', priority: 0.8 },  // RequestAService
  { url: '/services', changefreq: 'monthly', priority: 0.8 }, // ServicePage
  { url: '/team', changefreq: 'monthly', priority: 0.8 },     // TeamPage
  { url: '/careers', changefreq: 'monthly', priority: 0.7 },  // Careers
  { url: '/why', changefreq: 'monthly', priority: 0.7 },      // WhyPage
  { url: '/signup', changefreq: 'monthly', priority: 0.5 },   // SignupForm
  { url: '/signin', changefreq: 'monthly', priority: 0.5 },   // LoginForm
  { url: '/forgot-password', changefreq: 'monthly', priority: 0.5 },  // ForgotPassword
  { url: '/dashboard', changefreq: 'daily', priority: 0.9 },  // Private Dashboard
  { url: '/blog', changefreq: 'weekly', priority: 0.6 },      // Private Blog
  { url: '/page-not-found', changefreq: 'yearly', priority: 0.1 },  // PageNotFound
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://bdotsoftware.com' });

  routes.forEach(route => sitemap.write(route));
  sitemap.end();

  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);

  streamToPromise(sitemap).then(sm => writeStream.write(sm.toString()));
}

generateSitemap();