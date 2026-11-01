/**
 * Calculates estimated reading time automatically based on word count.
 * Turkish reading speed: ~200 words per minute.
 */
export function getReadingTime(
	contentOrPost?: { body?: string; data?: { readTime?: string } } | string,
	fallback?: string
): string {
	// If a post entry object was provided
	if (typeof contentOrPost === 'object' && contentOrPost !== null) {
		if (contentOrPost.data?.readTime) {
			return contentOrPost.data.readTime;
		}
		return getReadingTime(contentOrPost.body);
	}

	// If explicit fallback provided
	if (fallback && fallback.trim()) {
		return fallback;
	}

	const text = typeof contentOrPost === 'string' ? contentOrPost : '';
	if (!text || text.trim().length === 0) {
		return '2 dk okuma';
	}

	// Clean out code blocks, markdown syntax, and HTML tags
	const clean = text
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/<[^>]*>/g, ' ')
		.replace(/[#*_`~\[\]()>-]/g, ' ')
		.replace(/&[a-z0-9#]+;/gi, ' ');

	const words = clean.trim().split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.ceil(words / 200));

	return `${minutes} dk okuma`;
}

