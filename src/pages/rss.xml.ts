import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const insights = await getCollection('insights');
  return rss({
    title: 'Hector Luciano - AI & Cloud Insights',
    description: 'Senior AI & Cloud Solution Architect insights on AI agents, cloud architecture, and the future of development.',
    site: context.site ?? 'https://hlucianojr.github.io',
    items: insights
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.excerpt,
        link: `/insights/${post.slug}/`,
      })),
  });
}
