import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = (await getCollection('blog', ({ data }) => data.status !== 'Taslak'))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	const rawSite = context.site?.href || 'https://hepsiveri.com';
	const siteUrl = rawSite.replace(/\/+$/, '');

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		language: 'tr',
		items: posts.map((post) => {
			const heroSrc = typeof post.data.heroImage === 'string'
				? post.data.heroImage
				: post.data.heroImage?.src;

			const fullImgUrl = heroSrc
				? (heroSrc.startsWith('http') ? heroSrc : `${siteUrl}${heroSrc.startsWith('/') ? '' : '/'}${heroSrc}`)
				: undefined;

			return {
				title: post.data.title,
				pubDate: post.data.pubDate,
				description: post.data.description,
				link: `/haber/${post.id}/`,
				author: post.data.author || 'Onur Metin',
				categories: [post.data.category || 'Veri Haberciliği'],
				customData: fullImgUrl
					? `<media:content url="${fullImgUrl}" medium="image" />`
					: '',
			};
		}),
		customData: `<language>tr</language><atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />`,
		xmlns: {
			media: 'http://search.yahoo.com/mrss/',
			atom: 'http://www.w3.org/2005/Atom',
		},
	});
}

