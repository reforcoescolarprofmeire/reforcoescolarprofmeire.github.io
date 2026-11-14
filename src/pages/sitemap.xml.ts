import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

// Gerado a partir de siteConfig.url. Sem domínio configurado, o sitemap fica vazio (válido).
export const GET: APIRoute = () => {
  const url = siteConfig.url.replace(/\/$/, '');
  const entry = url
    ? `  <url><loc>${url}/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>\n` +
      `  <url><loc>${url}/privacidade/</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>\n`
    : '';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entry}</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
