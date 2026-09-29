import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => {
  const url = siteConfig.url.replace(/\/$/, '');
  const lines = ['User-agent: *', 'Allow: /', ...(url ? ['', `Sitemap: ${url}/sitemap.xml`] : [])];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
